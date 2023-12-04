import React from "react";
import { Link } from "react-router-dom";

function CardInfo({ item }) {
  return (
    <div className="demodate">
      <h2 className="titel">{item.title}</h2>
      <h4 className="secondary-titel">{item.secondary_title}</h4>
      <img className="img-container" src={item.img} alt="" />
      <br />
      <i className="date">{item.date}</i>
      <br />
      <button className="btn">
        <Link to={`/card-details/${item.id}`}>Details</Link>
      </button>
    </div>
  );
}

export default CardInfo;
