import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BsSave } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/signup");
    }

    // fetch all post
    fetch("http://localhost:5000/allposts", {
      method: "GET",
      headers: {
        Authorization: "bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex bg-gray-100 flex-col items-center justify-center p-4 py-8">
        {data?.map((posts) => {
          return (
            <div className="bg-white max-w-[460px] w-full rounded shadow-inner m-3">
              {/* Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  {/* Profile Picture */}
                  <div className="w-8 h-8 rounded-full overflow-hidden mt-2">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Username and Location */}
                  <div>
                    <Link className="text-sm font-semibold">
                      {posts.postedBy.name}
                    </Link>
                    <div className="text-xs text-gray-500 text-left">Surat</div>
                  </div>
                </div>
                {/* More Options Button */}
                <button className="p-2 text-2xl">
                  <HiOutlineDotsHorizontal />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative w-full aspect-[3/2]">
                <img
                  src={posts.photo}
                  alt="A person wearing a pink blouse and floral saree with braided hairstyle"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="p-3 my-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center justify-center">
                    {/* Like Button */}
                    <button className="text-2xl text-dark">
                      <FaRegHeart />
                    </button>
                    {/* Comment Button */}
                    <button className="text-2xl text-dark">
                      <FaRegComment />
                    </button>
                    {/* Share Button */}
                    <button className="text-2xl text-dark">
                      <LuSend />
                    </button>
                  </div>
                  {/* Save Button */}
                  <button className="text-xl text-dark">
                    <BsSave />
                  </button>
                </div>

                {/* Likes Count */}
                <div className="mt-3 pe-2">
                  <p className="font-semibold text-sm text-left">56 likes</p>
                </div>

                {/* Caption */}
                <div className="mt-2">
                  <p className="text-sm p-0 m-0 text-left">{posts.body}</p>
                </div>

                {/* comment section */}
                <div className="mt-4 mb-2 relative">
                  <div className="absolute top-1.5 left-2 text-xl">☺️</div>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="border w-full p-2 rounded-xl ps-12"
                  ></input>
                  <Link className="absolute right-3 top-2 font-semibold">
                    Post
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* Instagram Post Card */}
      </div>
    </div>
  );
};

export default Home;
