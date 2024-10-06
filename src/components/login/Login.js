import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavbarLogin from "./NavbarLogin";
// import About from "./About";

import "../css/login/login.css";
import "../css/login/form.css";

const Login = () => {
 
    const navigate = useNavigate();

    // states to get the details
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    axios
      .post(`https://happy-bites.onrender.com/users/login`, {
        username: username,
        password: password,
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
      await toast(details.data.message, { type: "success" });
      navigate("/dashboard");
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
            <form className="box-login" onSubmit={handleSubmit}>
              <div className="form-item-login">
                <label className="block-login">Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email ID"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-item-login">
                <label className="block">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-login"> <a href="/forgetpassword" style={{ textDecoration: "none", color: "white" }}>Forget Password? </a></div>
              <div className="form-item-login login-button">
                <button className="btn-link-login btn-login" type="submit">
                  Login &nbsp;<i className="fas fa-chevron-right"></i>
                </button>
                <button
                      className="btn-link-login btn-login"
                      style={{
                        background: "#f5e6c8",
                        border: "1px black solid",
                      }}
                      onClick={(e) => {
                        navigate("/register");
                        e.preventDefault();
                      }}
                    >Register</button>
              </div>
            </form>
          </div>
      </header>
    </>
  );
};

export default Login;
