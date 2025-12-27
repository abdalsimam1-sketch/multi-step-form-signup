import React, { useEffect } from "react";
import sideBarPic from "../assets/images/bg-sidebar-desktop.svg";
import { useNavigate, Link } from "react-router-dom";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useFormData } from "../Context/Context";

export const Step2 = () => {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();
  const handleNext = () => {
    if (!formData.plan) {
      alert("please choose a plan");
      return;
    }
    navigate("/step3");
  };
  useEffect(() => {
    console.log(formData.plan);
  }, [formData.plan]);
  const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  };
  return (
    <>
      <div
        className="row justify-content-center align-items-stretch m-5 p-5 shadow gap-3 col-12 mx-auto col-lg-8"
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="col-12 col-md-4 left-side  shadow p-5 text-capitalize d-flex justify-content-between d-md-inline"
          style={{
            backgroundSize: "cover",

            fontSize: "0.9rem",
          }}
        >
          <div className="row mb-3 ">
            <div className="col-2">
              <i className="bi bi-1-circle fs-3"></i>
            </div>
            <div className="col-8  ms-2 d-none d-md-inline">
              <p className="m-0 fw-bold">step 1</p>
              <span className="text-muted">your info </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <i className="bi bi-2-circle-fill fs-3"></i>
            </div>

            <div className="col-8 ms-2  d-none d-md-inline">
              <p className="m-0 fw-bold">step 2</p>
              <span>select plan</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              {" "}
              <i className="bi bi-3-circle fs-3 "></i>
            </div>
            <div className="col-8 ms-2  d-none d-md-inline">
              <p className="m-0 fw-bold">step 3</p>
              <span>add-ons</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-2">
              <i className="bi bi-4-circle fs-3"></i>
            </div>
            <div className="col-8 ms-2  d-none d-md-inline">
              <p className="fw-bold m-0">step 4</p>
              <span>summary</span>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-7 p-5 text-capitalize shadow position-relative"
          style={{
            backgroundSize: "cover",
            height: "80vh",
            fontSize: "0.7rem",
            borderRadius: "1rem",
          }}
        >
          <form action="">
            <h1>select your plan</h1>
            <p className="text-muted">
              you have the option of monthly or yearly billing
            </p>
            <div className="row mt-3 mt-md-5 gap-3  position-relative p-4 d-flex flex-column align-items-center flex-md-row">
              <div
                onClick={() => {
                  setFormData({
                    ...formData,
                    plan: "arcade",
                    planPrice: planPrices["arcade"],
                  });
                }}
                className="col-5 col-md-3 plan  shadow h-100  "
                style={{
                  borderRadius: "1rem",
                  height: "7rem",
                }}
              >
                <img src={arcade} alt="" className="p-3 " />
                <div>
                  {" "}
                  <h6 className="m-0">arcade</h6>
                  <span className="text-muted">$9/mo</span>
                </div>
              </div>
              <div
                onClick={() => {
                  setFormData({
                    ...formData,
                    plan: "advanced",
                    planPrice: planPrices["advanced"],
                  });
                }}
                className="col-5 col-md-3 plan shadow  h-100"
                style={{ borderRadius: "1rem" }}
              >
                <img src={advanced} alt="" className="p-3" />
                <div>
                  {" "}
                  <h6 className="m-0">advanced</h6>
                  <span>$12/mo</span>
                </div>
              </div>
              <div
                onClick={() => {
                  setFormData({
                    ...formData,
                    plan: "pro",
                    planPrice: planPrices["pro"],
                  });
                }}
                className="col-5 col-md-3 plan shadow  h-100"
                style={{
                  borderRadius: "1rem",
                }}
              >
                <img src={pro} alt="" className="p-3" />
                <div>
                  <h6 className="m-0">pro</h6>
                  <span>$15/mo</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary text-capitalize position-absolute"
              style={{ right: "2.7rem", bottom: "2rem" }}
            >
              Next Step
            </button>
            <Link to="/">
              <button
                type="submit"
                className="btn  btn-lg btn-tertiary text-capitalize position-absolute"
                style={{ left: "2.7rem", bottom: "2rem" }}
              >
                Go Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
