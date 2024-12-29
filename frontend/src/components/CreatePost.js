import React from "react";

const CreatePost = () => {
  const loadfile = (event) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div
      className="
    flex justify-center m-4"
    >
      <div className="w-full max-w-md bg-white border border-gray-400 p-2">
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className="text-center mx-auto text-2xl font-medium">
            Create New Post
          </h1>
          <span className="font-semibold text-blue-600">Share</span>
        </div>
        <div className="flex flex-col items-center justify-center p-8 border-b">
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              loadfile(event);
            }}
          />
          <img
            alt=""
            id="output"
            src="https://static.thenounproject.com/png/11204-200.png"
            className="mt-4 object-cover overflow-hidden w-[250px] h-[250px] pt-4"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 p-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              alt="Profile"
              className="w-[40px] h-[40px] object-cover overflow-hidden rounded-full"
            />
            <span className="font-semibold">Ramesh</span>
          </div>
        </div>
        <div>
          <textarea
            placeholder="Write a caption..."
            className="border p-4 w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
