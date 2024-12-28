import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BsSave } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {/* Instagram Post Card */}
        <div className="bg-white max-w-[468px] w-full rounded shadow">
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
                <a className="text-sm font-semibold">richandroyalsalon</a>
                <div className="text-xs text-gray-500 text-left">Surat</div>
              </div>
            </div>
            {/* More Options Button */}
            <button className="p-2 text-2xl">
              <HiOutlineDotsHorizontal />
            </button>
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-[4/5]">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/k7gikcw0/poster/f/h/7/medium-nature-wall-poster-butterfly-on-the-flower-high-original-imafpzxg8hk5ggsj.jpeg?q=90&crop=false"
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
              <p className="text-sm p-0 m-0 text-left">
                A little bit of volume, a lot of personality{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
