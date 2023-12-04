import React from "react";
import { useParams } from "react-router-dom";
import { getSignData } from "../helpers/demoData";

function CardDetails() {
  const id = useParams().name;

  const { title, secondary_title, description, img, date } = getSignData(id);

  return (
    <div>
      <h4>{title}</h4>
      <img src={img} alt="" style={{ width: "100vw" }} />
      <p>{description}</p>
      <div>
        <i>{date}</i>
        <h5>{secondary_title}</h5>
      </div>
    </div>
  );
}

export default CardDetails;
