const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");

router.get("/allposts", requireLogin, (req, res) => {
  POST.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", requireLogin, (req, res) => {
  const { body, pic } = req.body;
  if (!body || !pic) {
    return res.status(400).json({ error: "Please provide all field" });
  }

  const post = new POST({
    body,
    photo: pic,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => res.json({ post: result }))
    .catch((error) => console.log(error));
});

router.get("/myposts", requireLogin, (req, res) => {
  POST.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((myposts) => {
      res.json(myposts);
    })
    .catch((err) => console.error(err));
});

router.put("/like", requireLogin, (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.user._id } },
    { new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(400).json({ error: err }));
});

router.put("/unlike", requireLogin, (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(400).json({ error: err }));
});

router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    comment: req.body.text,
    postedBy: req.user._id,
  };
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(400).json({ error: err }));
});
router.delete("/deletepost/:postId", requireLogin, async (req, res) => {
  try {
    const post = await POST.findOne({ _id: req.params.postId }).populate(
      "postedBy",
      "_id name"
    );

    if (!post) {
      return res.status(400).json({ error: "Post not found" });
    }

    // Check if the user is authorized to delete the post
    if (post.postedBy._id.toString() === req.user._id.toString()) {
      await POST.deleteOne({ _id: req.params.postId }); // Use deleteOne here
      return res.json({ message: "Post deleted successfully" });
    } else {
      return res.status(403).json({ error: "Unauthorized action" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// router.delete("/deletepost/:postId", requireLogin, (req, res) => {
//   POST.findOne({ _id: req.params.postId })
//     .populate("postedBy", "_id")
//     .exec((err, post) => {
//       if (err || !post) {
//         return res.status(400).json({ error: "Post not found" });
//       }
//       if (post.postedBy._id.toString() === req.user._id.toString()) {
//         post
//           .remove()
//           .then((result) => {
//             return res.json({ message: "Post deleted successfully" });
//           })
//           .catch((error) => {
//             return res.status(400).json({ error: error });
//           });
//       }
//     });
// });

module.exports = router;
