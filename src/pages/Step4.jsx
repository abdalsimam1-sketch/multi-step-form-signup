import { Link } from "react-router-dom";
import { useFormData } from "../Context/Context";
import { useEffect } from "react";
export const Step4 = () => {
  const { formData, setFormData } = useFormData();
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const addtotal = () => {
    return formData.addOns.reduce((sum, addon) => sum + addon.price, 0);
  };
  const total = addtotal() + formData.planPrice;

  return (
    <>
      <div
        className="row justify-content-center align-items-stretch m-5 p-5 shadow gap-3 col-12 mx-auto col-lg-8  "
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="col-12 col-md-4  left-side  shadow p-5 text-capitalize d-flex justify-content-between d-md-inline"
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

            <div className="col-8 ms-2 d-none d-md-inline">
              <p className="m-0 fw-bold">step 2</p>
              <span>select plan</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              {" "}
              <i className="bi bi-3-circle fs-3"></i>
            </div>
            <div className="col-8 ms-2 d-none d-md-inline">
              <p className="m-0 fw-bold">step 3</p>
              <span>add-ons</span>
            </div>
          </div>
          <div className="row ">
            <div className="col-2">
              <i className="bi bi-4-circle-fill fs-3"></i>
            </div>
            <div className="col-8 ms-2 d-none d-md-inline">
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
          <h1>finishing up</h1>
          <p className="text-muted">
            double-check everything looks OK before confirming
          </p>

          <div
            className="col-12 mb-3  d-flex flex-row align-items-center justify-content-between p-2 shadow"
            style={{ borderRadius: "0.3rem" }}
          >
            <div className="">
              <h6 className="m-0">{formData.plan}</h6>
              <Link to="/step2">change</Link>
            </div>
            <span className="text-primary fw-bold">${formData.planPrice}</span>
          </div>

          {formData.addOns.map((addon, index) => (
            <div
              style={{ borderRadius: "0.3rem", fontSize: "0.8rem" }}
              key={index}
              className=" col-12 mb-3  fw-bold  p-2 shadow d-flex align-items-center justify-content-between "
            >
              <p>{addon.name}</p>
              <p className="text-primary">${addon.price}</p>
            </div>
          ))}

          <div className="d-flex align-items-center justify-content-between p-2 shadow">
            {" "}
            <h5>Total</h5>
            <span className="text-primary fw-bold fs-6">${total}</span>
          </div>

          <button
            type="submit"
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
        </div>
      </div>
    </>
  );
};
