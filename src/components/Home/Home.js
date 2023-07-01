import React from "react";
import "./Home.css";
import Product from "../product/Product";

export default function Home() {
  return (
    <div>
      <div>
        <div className="category">
          <div className="product">
            <div className="image">
              <img
                src={
                  "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/v/k/d/14iau7-gaming-laptop-lenovo-original-imaghnq4zafgebtu.jpeg?q=70"
                }
                alt=" "
              />
            </div>
            <div className="text">electronics</div>
          </div>
          <div className="product">
            <div className="image">
              <img
                src={
                  "https://rukminim1.flixcart.com/image/832/832/jxqfonk0/jewellery-set/s/s/s/rnz34n407r-apara-original-imafy589ggqzygpf.jpeg?q=70"
                }
                alt=""
              />
            </div>
            <div className="text">jewelery</div>
          </div>
          <div className="product">
            <div className="image">
              <img
                src={
                  "https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70"
                }
                alt=""
              />
            </div>
            <div className="text">men's clothing</div>
          </div>
          <div className="product">
            <div className="image">
              <img
                src={
                  "https://rukminim1.flixcart.com/image/416/416/xif0q/t-shirt/5/z/b/s-ww-melanin-balck-smartees-original-imagnxarrg6ygzhj.jpeg?q=70"
                }
                alt=""
              />
            </div>
            <div className="text">women's clothing</div>
          </div>
        </div>
      </div>

      <div className="product">
        <Product />
      </div>
    </div>
  );
}
