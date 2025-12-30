import React, { useEffect } from "react";
import welcome from "../assets/images/icon-thank-you.svg";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className=" col-12 mx-auto  col-md-8 d-flex justify-content-center align-items-center vh-100 shadow flex-column p-4">
        <img src={welcome} alt="welome" className="mb-3" />
        <h1 className="mb-3">Thank You!</h1>

        <p className="text-muted mb-5">
          Thanks for confirming you subscription! we hope you have fun using our
          platform. If you ever need support,please feel free to email us at
          supprt@loremgaming.com
        </p>
        <button className="btn btn-danger " onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </>
  );
};
