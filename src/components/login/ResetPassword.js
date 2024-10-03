import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavbarLogin from "./NavbarLogin";
// import About from "./About";

import "../css/login/login.css";
import "../css/login/form.css";

const ResetPassword = () => {
 
    const navigate = useNavigate();

    // states to get the details
    const [userName, setUsername] = useState("");
    const [oldPassword, setOldpassword] = useState("");
    const [newPassword, setNewpassword] = useState("");

  const handleSubmit = (e) => {
    axios
      .post(`https://happy-bites.onrender.com/users/reset-password`, {
        userName: userName,
        oldPassword: oldPassword,
        newPassword: newPassword
      })
      .then((resp) => {
        checkUser(resp);
      })
      .catch((err) => {
        console.log(err);
        toast("Invaild User");
  });
      
    e.preventDefault();
  };

  const checkUser = async (details) => {
    if (details.data.status) {
      await toast(details.data.message, { type: "success", onClose :()=> {
        navigate("/");
      }});
    } else {
      toast(details.data.message, { type: "error" });
    }
  };

  return (
    <>
    <ToastContainer />
      <header className="showcase-main-login">
        <NavbarLogin />
          <div className="content-login">
            <form className="box" onSubmit={handleSubmit}>
              <div className="form-item">
                <label className="block">Username</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label className="block">Old Password</label>
                <input
                  type="password"
                  name="Old Password"
                  placeholder="enter your old password"
                  onChange={(e) => setOldpassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label className="block">New Password</label>
                <input
                  type="password"
                  name="New Password"
                  placeholder="enter your new password"
                  onChange={(e) => setNewpassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-item login-button">
                <button
                      className="btn-link btn" type="submit"
                      style={{
                        background: "#fca311",
                        border: "1px black solid",
                      }}
                    >Reset Password</button>
              </div>
            </form>
          </div>
      </header>
    </>
  );
};

export default ResetPassword;
