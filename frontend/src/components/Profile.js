import React from "react";
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

import { Link } from "react-router-dom";

const Profile = () => {
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
              het._30
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
                <div className="font-semibold">4</div>
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
            {/* <button
              variant="outline"
              size="icon"
              className="bg-white border-gray-300 hover:bg-gray-100"
            >
              <IoPersonOutline className="h-4 w-4" />
            </button> */}
          </div>
        </section>

        {/* Stories Highlights */}
        {/* <section className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-1">
                <image
                  src="/placeholder.svg"
                  alt="Story highlight"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>
              <span className="text-xs">Navratri 2k24...</span>
            </div>
          </div>
        </section> */}

        {/* Gallery Toggle */}
        <div className="flex justify-center border-b border-gray-200">
          <button className="p-4 border-b-2 border-gray-900">
            <IoGridOutline className="h-6 w-6" />
          </button>
          <button className="p-4">
            <IoCameraOutline className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {/* Photo Grid */}
        {/* <div className="grid grid-cols-2 gap-0.5 bg-gray-100">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="aspect-square relative">
              <image
                src={`https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww`}
                alt={`Post ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 gap-1 bg-gray-100 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="Post 1"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="Post 1"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="Post 1"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="Post 1"
          />
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
    </div>
  );
};

export default Profile;
