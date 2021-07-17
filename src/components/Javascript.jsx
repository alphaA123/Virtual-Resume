import React from "react";
import Navbar from "./Navbar/navbar";
import Pic1 from "../images/Js2.jpg";
import Pic from "../images/Js1.jpg";
import Card from "./Card"

const Javascript = () => {
  return (
    <>
      <Navbar />
      <h2 id="heading">JavaScript</h2>
      <p id="click">Click on Image to Navigate to the Website. </p>
      <Card
        title={"MARTIAL ARTS SIMULATOR"}
        site={"https://alphaa123.github.io/Drum/"}
        url={Pic}
        description={"Martial Arts Simulator made with JavaScript Canvas."}
      />
      <Card
        title={"DRUM MANIA"}
        site={"https://alphaa123.github.io/martial-arts-simulator/"}
        url={Pic1}
        description={
          "Drum Mania App lets you play diffrent instruments sounds by making use of JavaScript Events "
        }
      />
      <p id="heading">More Projects Coming Soon ...</p>
    </>
  );
};

export default Javascript;
