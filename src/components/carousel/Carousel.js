import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="carousel-div">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_WW_3000._CB603210873_.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/Deals-Unrec-Apay-3000-1200._CB603212230_.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={
                "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Haircare-Herofader-PC._CB594539534_.jpg"
              }
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
