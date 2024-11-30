import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid text-center p-5">
      <h2 className="text-success">Booking Confirmed!</h2>
      <hr className="my-5" />
      <h4>Thankyou for choosing us!</h4>
      <h4>Your booking has been successfully confirmed.</h4>
      <button type="button" className="btn btn-outline-primary btn-sm px-4 mt-4" onClick={handleGoHome}>
        Go back Home
      </button>
    </div>
  );
};

export default ConfirmedBooking;
