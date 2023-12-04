import React from "react";
import "../styles/templates.css";
// import Templates1 from "../img/Templates1.jpg";
import Templates2 from "../img/Templates2.jpg";
import Templates3 from "../img/Templates3.jpg";
import Templates4 from "../img/Templates4.jpg";

function Templates() {
  return (
    <div className="templates-components">
      <div className="templates-text">
        <h1>Social Media Templates</h1>
        <p>
          I also sell social media templates for smaller businesses. Don't be
          shy and let me know if you have any questions. Just message
          @reallygreatsite!
        </p>
      </div>
      <div className="templates-item">
        <img src={Templates2} alt="" />
        <img src={Templates3} alt="" />
        <img src={Templates4} alt="" />
      </div>
    </div>
  );
}

export default Templates;
