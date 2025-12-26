import React, { use, useState } from "react";
import sideBarPic from "../assets/images/bg-sidebar-desktop.svg";
import { Link } from "react-router-dom";
import { useFormData } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export const Step1 = () => {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      navigate("/step2");
    } else {
      e.target.reportValidity();
    }
  };

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
              <i className="bi bi-1-circle-fill fs-3"></i>
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
              <i className="bi bi-4-circle fs-3"></i>
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
          <form onSubmit={handleSubmit}>
            <h1>personal info </h1>
            <p className="text-muted">
              please enter your name, email, phone number and password
            </p>
            <label htmlFor="name" className="form-label ">
              name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              minLength={5}
            />
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="email"
              value={formData.email}
              className="form-control mb-3"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              minLength={5}
              required
            />
            <label htmlFor="number" className="form-label">
              phone number{" "}
            </label>
            <input
              type="phone number"
              className="form-control mb-3"
              value={formData.number}
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
              minLength={11}
              required
            />
            <label htmlFor="number" className="form-label">
              password{" "}
            </label>
            <input
              type="password"
              value={formData.password}
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              minLength={8}
              required
            />

            <button
              type="submit"
              className="btn btn-primary btn-lg text-capitalize position-absolute"
              style={{ right: "2.7rem", bottom: "2rem" }}
            >
              next step
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
