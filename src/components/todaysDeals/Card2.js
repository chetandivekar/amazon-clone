import React from "react";
import "./Card2.css";

export default function Card2({ title }) {
  return (
    <div>
      <div className="card-main">
        <div className="cards">
          <div className="heading">{title}</div>
          <div className="image__containers         ">
            <div className="upper_container">
              <img
                src={
                  "https://m.media-amazon.com/images/I/61hrW7K00ZL._AC_SY145_.jpg"
                }
                alt=""
              />
              <img
                src={
                  "https://m.media-amazon.com/images/I/71kfHC4ANJL._AC_SY145_.jpg"
                }
                alt=""
              />
            </div>
            <div className="lower_container">
              <img
                src={
                  "https://m.media-amazon.com/images/I/8104evx11QL._AC_SY145_.jpg"
                }
                alt=""
              />
              <img
                src={
                  "https://m.media-amazon.com/images/I/71tK4N8GtDL._AC_SY145_.jpg"
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
