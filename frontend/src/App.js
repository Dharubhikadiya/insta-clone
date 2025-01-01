import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./components/CreatePost";
import { LoginContext } from "./context/Logincontext";
import Modal from "./components/Modal";
import UserProfile from "./components/UserProfile";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider value={{ setUserLogin, setmodalOpen }}>
          <Navbar login={userLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/userprofile/:userid" element={<UserProfile />} />
          </Routes>

          <ToastContainer />
          {modalOpen && <Modal setmodalOpen={setmodalOpen} />}
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
