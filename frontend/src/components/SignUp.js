import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const notifyA = (message) => toast.error(message);
  const notifyB = (message) => toast.success(message);

  const validateFields = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/; // At least 3 characters, letters and spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // At least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character

    if (!name || !nameRegex.test(name)) {
      notifyA(
        "Name must be at least 3 characters and contain only letters and spaces."
      );
      return false;
    }

    if (!email || !emailRegex.test(email)) {
      notifyA("Please enter a valid email address.");
      return false;
    }

    if (!username) {
      notifyA("Please enter a username.");
      return false;
    }

    if (!password || !passwordRegex.test(password)) {
      notifyA(
        "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character."
      );
      return false;
    }

    return true;
  };

  const handlesubmit = () => {
    if (!validateFields()) {
      return;
    }

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          navigate("/signin");
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md border-2 border-gray p-8 bg-white rounded-lg">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-[110px] w-auto"
        />
        <h2 className="mt-2 text-center text-xl font-semibold tracking-tight text-gray-900">
          Sign up to see photos and videos from your friends.
        </h2>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlesubmit}>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-lg/6 font-medium text-gray-900"
                >
                  Email address
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#0095f6] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="forgotpassword"
                    className="font-semibold text-[#0095f6]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#0095f6] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="fname"
                  className="block text-lg/6 font-medium text-gray-900"
                >
                  Full Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="fname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#0095f6] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="block text-lg/6 font-medium text-gray-900"
                >
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#0095f6] sm:text-sm/6"
                />
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>

            <div>
              <button
                onClick={() => handlesubmit()}
                type="button"
                className="flex w-full justify-center rounded-md bg-[#0095f6] px-3 py-2 text-lg/6 font-semibold text-white shadow-sm hover:bg-[#4cb5f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0095f6]"
              >
                Sign up
              </button>
            </div>

            <p className="text-center text-md text-black">
              Have an account?{" "}
              <Link to="/signin" className="text-[#0095f6] font-semibold">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
