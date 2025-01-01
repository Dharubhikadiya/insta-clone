import React, { useEffect, useState } from "react";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoAddOutline,
  IoVideocamOutline,
  IoGridOutline,
  IoCameraOutline,
  IoNotificationsOutline,
  IoEllipsisVerticalOutline,
  // IoPersonOutline,
} from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import PostDetail from "./PostDetail";

const UserProfile = () => {
  const { userid } = useParams();

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${userid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUser(result.user);
        setPosts(result.posts);
      });
  }, []);

  return (
    <div
      className="
    flex justify-center m-4"
    >
      <div className="w-full max-w-md bg-white border border-gray-400">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-semibold">
              {user.name}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <IoNotificationsOutline className="h-6 w-6" />
            <IoEllipsisVerticalOutline className="h-6 w-6" />
          </div>
        </header>

        {/* Profile Info */}
        <section className="p-4">
          <div className="flex items-center justify-between w-full">
            <div className=" w-1/5 mt-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                alt="Profile"
                className="w-[80px] h-[80px] object-cover overflow-hidden rounded-full"
              />
            </div>
            <div className="w-4/5 flex items-center justify-between text-center ps-6">
              <div>
                <div className="font-semibold">{posts.length}</div>
                <div className="text-sm text-gray-600">posts</div>
              </div>
              <div>
                <div className="font-semibold">447</div>
                <div className="text-sm text-gray-600">followers</div>
              </div>
              <div>
                <div className="font-semibold">385</div>
                <div className="text-sm text-gray-600">following</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              variant="outline"
              className="flex-1 rounded-lg bg-white text-gray-900 p-1 border border-gray-300 hover:bg-gray-100"
            >
              Following
            </button>
            <button
              variant="outline"
              className="flex-1 rounded-lg bg-white text-gray-900 p-1 border border-gray-300 hover:bg-gray-100"
            >
              Message
            </button>
          </div>
        </section>

        {/* Gallery Toggle */}
        <div className="flex justify-center border-b border-gray-200">
          <button className="p-4 border-b-2 border-gray-900">
            <IoGridOutline className="h-6 w-6" />
          </button>
          <button className="p-4">
            <IoCameraOutline className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1 bg-gray-100 ">
          {posts?.map((pic) => {
            return (
              <>
                <img
                  //   onClick={() => toggleDetails(pic)}
                  key={pic?._id}
                  src={pic?.photo}
                  className="w-full h-40 object-cover"
                />
              </>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <nav className="sticky bottom-0 left-0 right-0 flex justify-between p-4 bg-white border-t border-gray-200">
          <IoHomeOutline className="h-6 w-6" />
          <IoSearchOutline className="h-6 w-6" />
          <IoAddOutline className="h-6 w-6" />
          <IoVideocamOutline className="h-6 w-6" />
          <image
            src="/placeholder.svg?height=24&width=24"
            alt="Profile"
            width={24}
            height={24}
            className="rounded-full"
          />
        </nav>
      </div>
      {/* {show && <PostDetail items={posts} toggleDetails={toggleDetails} />} */}
    </div>
  );
};

export default UserProfile;
