import React from "react";
import "../styles/design.css";
import Website1 from "../img/Website1.jpg";
import Website2 from "../img/Website2.jpg";
import Design1 from "../img/Design1.jpg";
import Design2 from "../img/Design2.jpg";

function Design() {
  return (
    <div className="components">
      <div className="design-components">
        <div className="text-item">
          <h1>Website Design</h1>
          <p>
            I specialize in fun and bright colors, making products feel
            accessible and chic at the same time.
          </p>
        </div>
        <div className="first-img">
          <img src={Website1} alt="" />
          <p>Study 1</p>
        </div>
        <div className="second-img">
          <img src={Website2} alt="" />
          <p>Study 2</p>
        </div>
      </div>
      <div className="Website-components">
        <div className="first-website-img">
          <img src={Design1} alt="" />
        </div>
        <div className="text-components">
          <p>
            Mobile-first is the name of the game. My designs are optimized to
            make sure your future customers love the feel of your website with
            every click.
          </p>
        </div>
        <div className="second-website-img">
          <img src={Design2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Design;
