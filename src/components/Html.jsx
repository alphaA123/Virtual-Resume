import React from "react";
import Navbar from "./Navbar/navbar";
import Card from "./Card"
import Pic1 from "../images/html2.jpg";
import Pic from "../images/html1.jpg";

const Html = () => {
  return (
    <>
      <Navbar />
      <h2 id="heading">HTML/CSS</h2>
      <p id="click">Click on Image to Navigate to the Website. </p>
      <Card
        title={"Portfolio"}
        site={"https://alphaa123.github.io/AbhiWeb/ "}
        url={Pic}
        description={"My personal Page."}
      />
      <Card
        title={"THE FOOD BAZAAR"}
        site={"https://alphaa123.github.io/Food-Baazar/"}
        url={Pic1}
        description={
          "A landing page made with with pure Html, Css and JavaScript"
        }
      />
      <p id="heading">More Projects Coming Soon ...</p>
    </>
  );
};

export default Html;
