import React from "react";
import "../styles/worked.css";
import worked from "../img/worked.jpg";

function Worked() {
  return (
    <div className="worked-components">
      <div className="item-components">
        <div className="img-components">
          <img src={worked} alt="" />
        </div>
        <div className="first-components">
          <h1>I've learned from</h1>
          <li>GRPA Studios (Certificate Course in Digital Design, 2020)</li>
          <li>Wolloughdale University (MFA, 2018-2019)</li>
          <li>Trempleway Academy for the Arts (BFA, 2015-2018)</li>
        </div>
      </div>

      <div className="second-components">
        <h1>I've worked with</h1>
      </div>

      <div className="third-components">
        <h1>GRPA Studios</h1>
        <h1>
          <i>Liz Flamhaff</i>
        </h1>
        <h1>LOTUS</h1>
        <h1>Beauray Park</h1>
      </div>
    </div>
  );
}

export default Worked;
