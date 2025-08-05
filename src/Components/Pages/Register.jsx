import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
const Register = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);
  function handleRegisterBtn(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profileInfo = {
      displayName: name,
      photoURL: photo,
    };
    setErrorMsg("");

    createUser(email, password)
      .then((userCredential) => {
        const currentUserEmail = userCredential.user.email;
        setErrorMsg("Registered in successfully");
        localStorage.setItem(currentUserEmail, 10000);
        navigate("/");
        updateProfile(auth.currentUser, profileInfo)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error,"profile update error");
          });
        console.log(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        notify("Registration not successful");
      });
  }
  return (
    <div className="hero-content flex-col lg:flex-row-reverse ">
      <ToastContainer />
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegisterBtn}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              name="name"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Photo URL"
              name="photo"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            ></input>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <div className="mt-5">{errorMsg}</div>
            <div className="flex flex-col">
              <button className="btn btn-neutral ">Register</button>
              <Link to={"/login"}>
                <button className="btn btn-neutral mt-4 w-full">Log In</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
