import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
export default function Todays() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card title="Deals for you in cell phone and Accessories" />
      <Card1
        title="Prime Day is july 15th and 16th"
        img={
          "https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/PD23/GW/Desktop_CC_V2_EN_1x._SY304_CB602878183_.jpg"
        }
      />
      <Card1
        title="Up to 70% off | Clearance store"
        img={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
        }
      />
      <Card2 title="Up to 80% off | Styles for men" />
    </div>
  );
}
