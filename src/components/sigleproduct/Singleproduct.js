import React from "react";
import "./Singleproduct.css";
import StarIcon from "@mui/icons-material/Star";
// import { Link, useLocation } from "react-router-dom";

export default function Singleproduct({ product, cart, setCart, setonecart }) {
  return (
    <div>
      <div className="product__card row">
        <img
          style={{ width: "150px", marginTop: "10px" }}
          src={product.image}
          alt=""
        />
        <div className="bottom">
          <div className="title">{product.title.slice(0, 15) + "...."}</div>
          <div className="price">₹ {product.price}</div>
          <div className="delivery">Free Delivery</div>
          <div className="rating">
            <div className="btton">
              <div className="rate">{product.rating.rate}</div>
              <StarIcon style={{ width: "16px" }} />
            </div>
            <div className="count">{product.rating.count} Reviews</div>
          </div>
          <div className="purchase">
            {/* <div className="bton btn1">Add to cart</div> */}
            {/* <div className="bton btn2">Buy Now</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
