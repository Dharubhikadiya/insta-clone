import React, { useContext } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/Logincontext";

export default function Navbar({ login }) {
  const { setmodalOpen } = useContext(LoginContext);
  const loginstatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <li key={login.id} className="text-lg">
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">
              Profile
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/createpost"
              className="text-gray-600 hover:text-gray-800"
            >
              Create Post
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/myfollowingpost"
              className="text-gray-600 hover:text-gray-800"
            >
              My Following
            </Link>
          </li>
          <li className="text-lg" onClick={() => setmodalOpen(true)}>
            <Link to={""} className="text-gray-600 hover:text-gray-800">
              Log out
            </Link>
          </li>
        </>,
      ];
    } else {
      return [
        <>
          <li className="text-lg">
            <Link to="/signup" className="text-gray-600 hover:text-gray-800">
              SignUp
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/signin" className="text-gray-600 hover:text-gray-800">
              SignIn
            </Link>
          </li>
        </>,
      ];
    }
  };

  return (
    <div>
      <nav className="shadow-lg flex justify-center items-center py-1 h-16 w-full">
        <div className="container flex items-center justify-between h-full px-20">
          <div className="flex items-center justify-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-20 mt-1" />
            </Link>
          </div>
          <div className="flex ml-4 items-center">
            <ul className="flex gap-8">{loginstatus()}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
