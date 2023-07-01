import React from "react";
import "./Card1.css";

export default function Card({ title, img }) {
  return (
    <div>
      <div className="card-mains">
        <div className="cards1">
          <div className="heading">{title}</div>
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
