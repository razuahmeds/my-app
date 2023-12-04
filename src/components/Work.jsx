import React from "react";
import "../styles/work.css";
import work from "../img/Work with Me.jpg";

function Work() {
  return (
    <div className="work-components">
      <div className="work-item">
        <div className="texts">
          <h1>Work with Me</h1>
          <div className="address">
            <p>Address</p>
            <p>123 Anywhere St., Any City State, Country 12345</p>
          </div>
          <div className="Phone">
            <p>Phone</p>
            <p>(123) 456 7890</p>
          </div>
          <div className="Email">
            <p>Email</p>
            <p>hello@reallygreatsite.com</p>
          </div>
        </div>
        <div className="imges">
          <img src={work} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Work;
