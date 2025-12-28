import React from "react";
import { Link } from "react-router-dom";
export const Step0 = () => {
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
          <form action="">
            <label htmlFor="email" className="form-label mt-5">
              email
            </label>
            <input type="text" name="" id="" className="form-control" />

            <label htmlFor="password" className="form-label">
              password
            </label>
            <input type="text" name="" id="" className="form-control mb-5" />
            <button className="btn btn-secondary form-control mb-4">
              Log In{" "}
            </button>

            <i className="bi bi-google btn btn-secondary form-control mb-4">
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
