import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="shadow-lg flex justify-center items-center py-1 h-16 w-full">
        <div className="container flex items-center justify-between h-full px-20">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-20 mt-1" />
          </div>
          <div className="flex ml-4 items-center">
            <ul className="flex gap-12">
              <li className="text-lg">
                <Link to="signup" className="text-gray-600 hover:text-gray-800">
                  SignUp
                </Link>
              </li>
              <li className="text-lg">
                <Link to="signin" className="text-gray-600 hover:text-gray-800">
                  SignIn
                </Link>
              </li>
              <li className="text-lg">
                <Link
                  to="profile"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
