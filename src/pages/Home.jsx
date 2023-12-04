import React from "react";
import Artists from "../components/Artists";
import Banner from "../components/Banner";
import Design from "../components/Design";
import PosterDesign from "../components/PosterDesign";
import Templates from "../components/Templates";
import Work from "../components/Work";
import Worked from "../components/Worked";

function Home() {
  return (
    <div>
      <Banner />
      <Artists />
      <Worked />
      <Design />
      <Templates />
      <PosterDesign />
      <Work />
    </div>
  );
}

export default Home;
