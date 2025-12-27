import React from "react";
import sideBarPic from "../assets/images/bg-sidebar-desktop.svg";
import { Link } from "react-router-dom";
export const Step4 = () => {
  return (
    <>
      <div
        className="row justify-content-center align-items-center m-5 p-5 shadow gap-3 col-12 mx-auto col-md-12  col-lg-8  "
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="col-4 left-side  shadow p-5 text-capitalize"
          style={{
            backgroundSize: "cover",
            height: "80vh",
            fontSize: "0.9rem",
          }}
        >
          <div className="row mb-3 ">
            <div className="col-2">
              <i className="bi bi-1-circle fs-3"></i>
            </div>
            <div className="col-8  ms-2">
              <p className="m-0 fw-bold">step 1</p>
              <span className="text-muted">your info </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <i className="bi bi-2-circle fs-3"></i>
            </div>

            <div className="col-8 ms-2">
              <p className="m-0 fw-bold">step 2</p>
              <span>select plan</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              {" "}
              <i className="bi bi-3-circle fs-3"></i>
            </div>
            <div className="col-8 ms-2">
              <p className="m-0 fw-bold">step 3</p>
              <span>add-ons</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-2">
              <i className="bi bi-4-circle-fill fs-3"></i>
            </div>
            <div className="col-8 ms-2">
              <p className="fw-bold m-0">step 4</p>
              <span>summary</span>
            </div>
          </div>
        </div>
        <div
          className="col-7 p-5 text-capitalize shadow position-relative"
          style={{
            backgroundSize: "cover",
            height: "80vh",
            fontSize: "0.7rem",
            borderRadius: "1rem",
          }}
        >
          <h1>finishing up</h1>
          <p className="text-muted">
            double-check everything looks OK before confirming
          </p>
          <form action="">
            <div className="col-10"></div>
            <button
              className="btn btn-primary text-capitalize position-absolute"
              style={{ right: "2.7rem", bottom: "2rem" }}
            >
              Submit
            </button>
            <Link to="/step3">
              <button
                className="btn btn-tertiary text-capitalize position-absolute"
                style={{ left: "2.7rem", bottom: "2rem" }}
              >
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
