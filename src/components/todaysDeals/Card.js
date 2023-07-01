import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div>
      <div className="card-main">
        <div className="cards">
          <div className="heading">
            Deals for you in cell phone and Accessories
          </div>
          <div className="image__container">
            <div className="upper_container">
              <img
                src={
                  "https://m.media-amazon.com/images/I/71qZERyxy6L._SX569_.jpg"
                }
                alt=""
              />
              <img
                src={
                  "https://m.media-amazon.com/images/I/71i8T4T0jdL._AC_SY145_.jpg"
                }
                alt=""
              />
            </div>
            <div className="lower_container">
              <img
                src={
                  "https://m.media-amazon.com/images/I/61VfL-aiToL._AC_SY145_.jpg"
                }
                alt=""
              />
              <img
                src={
                  "https://m.media-amazon.com/images/I/417C5rn0FIL._AC_SY145_.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
