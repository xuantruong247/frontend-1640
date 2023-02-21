import React from "react";
import "./style.css";

const CarouselHome = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=960/https://images.accommodationforstudents.com/website/university-guides/gb/university-of-greenwich/uni.jpg")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="man-den"></div>
      <div className="text-title">
        <h3>Better digital experience with CMS Greenwich.</h3>
        <p className="">
          We are a team of talented designers making websites with my team.
        </p>
        <button type="button" class="btn btn-danger">
          Get Started!
        </button>
      </div>
    </div>
  );
};

export default CarouselHome;
