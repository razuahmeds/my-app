import React from "react";
import "../styles/artists.css";
import item1 from "../img/item-1.jpg";
import item2 from "../img/item-2.jpg";

function Artists() {
  const aritstInf = {
    title: "As an Artist",
    description:
      "My goal is to help every brand come alive through design. In today's highly competitive digital space, it's important for online businesses to establish their presence as they would traditionally do in a retail space.",
  };

  return (
    <div className="artists-components">
      <div className="item-container">
        <div className="first-item">
          <img src={item1} alt="" />
        </div>
        <div className="second-item">
          <img src={item2} alt="" />
        </div>
        <div className="third-item">
          <h1>{aritstInf.title}</h1>
          <p> {aritstInf.description} </p>
        </div>
      </div>
    </div>
  );
}

export default Artists;
