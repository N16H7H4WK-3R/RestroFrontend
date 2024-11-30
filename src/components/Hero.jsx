import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();


  const handleReserve = () => {
    navigate("/booking");
  };


  return (
    <>
      <div class="container col-xxl-8 px-4 py-3">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://lvivity.com/wp-content/uploads/2018/11/mobile-app-for-restaurant.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">India</h1>
            <p class="lead">We are a family-owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" onClick={handleReserve} class="btn btn-outline-primary btn-sm px-4 me-md-2">Reserve a table</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
