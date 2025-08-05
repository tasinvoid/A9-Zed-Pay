import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const notify = () => toast("Wow so easy!");
  function handleRegisterBtn(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMsg("");
    signInUser(email, password)
      .then((userCredential) => {
        setErrorMsg("Logged in successfully");
        console.log(userCredential);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMsg("Enter Correct Password");
      });
  }
  function handleForgetPass() {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email).then(() => {
      notify();
    });
  }
  function handleGoogleBtn() {
    signInGoogle().then(() => {
      navigate(location?.state || "/");
    });
  }
  return (
    <div className="hero-content flex-col lg:flex-row-reverse ">
      <ToastContainer />
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegisterBtn}>
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              ref={emailRef}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            ></input>

            <div>
              <a className="link link-hover" onClick={handleForgetPass}>
                Forgot password?
              </a>
            </div>
            <div className="mt-5">{errorMsg}</div>
            <div className="flex flex-col gap-5">
              <button className="btn btn-neutral mt-4">Login</button>
              <Link to={"/register"}>
                {" "}
                <button className="btn btn-neutral mt-4 w-full">Register</button>
              </Link>

              {/* Google */}
              <button
                className="btn bg-white text-black border-[#e5e5e5]"
                onClick={handleGoogleBtn}
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
