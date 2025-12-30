import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
export const Step0 = () => {
  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate("/welcome");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/welcome");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("user not found");
      } else if (error.code === "auth/wrong-password") {
        alert("incorrect password");
      } else {
        alert("please try again");
      }
      console.error(error);
    }
  };
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center p-5 col-12 mx-auto col-md-7 col-lg-6 left-side"
        style={{ backgroundSize: "cover", height: "100vh", width: "100%" }}
      >
        <div
          className="col-12 mx-auto col-md-5 col-lg-5 shadow text-capitalize p-5 "
          style={{ borderRadius: "1rem" }}
        >
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="form-label mt-5">
              email
            </label>
            <input
              type="text"
              name=""
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              name=""
              className="form-control mb-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-secondary form-control mb-4"
              type="submit"
            >
              Log In{" "}
            </button>

            <i
              onClick={handleGoogle}
              className="bi bi-google btn btn-secondary form-control mb-4"
            >
              {" "}
              Log In With Google{" "}
            </i>

            <div className=" d-flex justify-content-center ">
              <span className="me-3"> Don't Have and account ?</span>
              <Link to="/step1" style={{ color: "white" }}>
                {" "}
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
