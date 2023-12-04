import React from "react";
import { demoData } from "../helpers/demoData";
import "../styles/array.css";
import CardInfo from "./CardInfo";

function Array() {
  return (
    <div className="components">
      {demoData.map((item, index) => {
        return <CardInfo item={item} key={index} />;
      })}
    </div>
  );
}

export default Array;
