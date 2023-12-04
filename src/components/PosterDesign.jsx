import React from "react";
import "../styles/posterDesign.css";
import PosterDesign1 from "../img/Poster Design1.jpg";
import PosterDesign2 from "../img/Poster Design2.jpg";
import PosterDesign3 from "../img/Poster Design3.jpg";

function PosterDesign() {
  return (
    <div className="PosterDesign-components">
      <div className="PosterDesign-text">
        <h1>Poster Design</h1>
        <p>My customizable print posters are now up for sale at</p>
        <p>www.reallygreatsite.com.</p>
        <h6>Not for commercial use.</h6>
      </div>
      <div className="imges-components">
        <div className="first-imges">
          <img src={PosterDesign1} alt="" />
          <img src={PosterDesign2} alt="" />
        </div>
        <div className="second-imges">
          <img src={PosterDesign3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PosterDesign;
