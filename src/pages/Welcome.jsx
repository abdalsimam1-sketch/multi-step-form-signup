import React from "react";
import welcome from "../assets/images/icon-thank-you.svg";

export const Welcome = () => {
  return (
    <>
      <div className=" col-12 mx-auto  col-md-8 d-flex justify-content-center align-items-center vh-100 shadow flex-column p-4">
        <img src={welcome} alt="welome" className="mb-3" />
        <h1 className="mb-3">Thank You!</h1>

        <p className="text-muted">
          Thanks for confirming you subscription! we hope you have fun using our
          platform. If you ever need support,please feel free to email us at
          supprt@loremgaming.com
        </p>
      </div>
    </>
  );
};
