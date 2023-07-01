import React, { useEffect, useState } from "react";
import Singleproduct from "../sigleproduct/Singleproduct";
import "../sigleproduct/Singleproduct.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        // setFilteredProducts(json);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [products]);

  //   const [filteredProducts, setFilteredProducts] = useState([...products]);

  //   const lowtoHigh = () => {
  //     setFilteredProducts(
  //       [...filteredProducts].sort((a, b) => a.price - b.price)
  //     );
  //   };

  //   const hightoLow = () => {
  //     setFilteredProducts(
  //       [...filteredProducts].sort((a, b) => b.price - a.price)
  //     );
  //   };

  //   const zerotoTen = () => {
  //     setFilteredProducts(
  //       [...products].filter((e) => e.price >= 0 && e.price <= 10)
  //     );
  //   };

  //   const tentoHun = () => {
  //     setFilteredProducts(
  //       [...products].filter((e) => e.price > 10 && e.price <= 100)
  //     );
  //   };
  return (
    <div>
      <div className="row my-row">
        {products.map((product) => (
          <div className="col-2 mx-3 my-2" key={product.id}>
            <Singleproduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
