import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../Context/Context";

export const Step3 = () => {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();
  const handleAddOns = (addon) => {
    setFormData((prev) => {
      const alreadySelected = prev.addOns.some((a) => a.name === addon.name);

      return {
        ...prev,
        addOns: alreadySelected
          ? prev.addOns.filter((a) => a.name !== addon.name)
          : [...prev.addOns, addon],
      };
    });
  };
  const addOnPrices = {
    "online service": 1,
    "larger storage": 2,
    "customizable profile": 2,
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleNext = (e) => {
    if (formData.addOns.length === 0) {
      alert("please choose on of the add ons");
    } else {
      navigate("/step4");
    }
  };
  return (
    <>
      <div
        className="row justify-content-center align-items-stretch m-5 p-5 shadow gap-3 col-12 mx-auto  col-lg-8  "
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="col-12 col-md-4 left-side shadow p-5 text-capitalize d-flex justify-content-between d-md-inline"
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
              <i className="bi bi-2-circle fs-3"></i>
            </div>

            <div className="col-8 ms-2  d-none d-md-inline">
              <p className="m-0 fw-bold">step 2</p>
              <span>select plan</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              {" "}
              <i className="bi bi-3-circle-fill fs-3"></i>
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
          className="col-12 col-md-7 p-3 text-capitalize shadow position-relative"
          style={{
            backgroundSize: "cover",
            height: "80vh",
            fontSize: "0.7rem",
            borderRadius: "1rem",
          }}
        >
          <h1>pick add-ons</h1>
          <p className="text-muted">
            {" "}
            add-ons help enhance your gaming experience
          </p>
          <form>
            <div className="col-12 ">
              <div
                onClick={() =>
                  handleAddOns({
                    name: "online service",
                    price: addOnPrices["online service"],
                  })
                }
                className=" d-flex align-items-center shadow justify-content-between p-3 mt-5 mb-4"
                style={{ borderRadius: "1rem" }}
              >
                <input
                  type="checkbox"
                  className="me-3"
                  checked={formData.addOns.some(
                    (a) => a.name === "online service"
                  )}
                  onChange={(e) => e.stopPropagation()}
                />
                <div className="me-auto">
                  <h6 className="m-0">online service</h6>
                  <span className="text-muted">
                    access to multiplayer games
                  </span>
                </div>

                <span className="text-primary ms-auto">+$1/mo</span>
              </div>

              <div
                onClick={() =>
                  handleAddOns({
                    name: "larger storage",
                    price: addOnPrices["larger storage"],
                  })
                }
                style={{ borderRadius: "1rem" }}
                className="d-flex shadow align-items-center p-3 mb-4 "
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="me-3"
                  checked={formData.addOns.some(
                    (a) => a.name === "larger storage"
                  )}
                  onChange={(e) => e.stopPropagation()}
                />
                <div>
                  <h6 className="m-0">larger storage</h6>
                  <span className="text-muted">extra 1tB of clould save</span>
                </div>
                <span className="text-primary ms-auto">+$2/mo</span>
              </div>

              <div
                onClick={() =>
                  handleAddOns({
                    name: "customizable profile",
                    price: addOnPrices["customizable profile"],
                  })
                }
                style={{ borderRadius: "1rem" }}
                className="d-flex align-items-center shadow  p-3"
              >
                <input
                  type="checkbox"
                  checked={formData.addOns.some(
                    (a) => a.name === "customizable profile"
                  )}
                  onChange={(e) => e.stopPropagation()}
                />
                <div className="ms-3">
                  <h6 className="m-0">customizable profile</h6>
                  <span className="text-muted">
                    custom theme on your profile{" "}
                  </span>
                </div>
                <span className="text-primary ms-auto">+$2/mo</span>
              </div>
            </div>

            <button
              className="btn btn-primary text-capitalize position-absolute"
              style={{ right: "2.7rem", bottom: "2rem" }}
              onClick={handleNext}
              type="button"
            >
              {" "}
              Next Step{" "}
            </button>
            <Link to="/step2">
              <button
                type="button"
                className="btn btn-tertiary text-capitalize position-absolute"
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
