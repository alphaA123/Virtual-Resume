import React from "react";
import Navbar from "./Navbar/navbar";
import Pic from "../images/react1.jpg"
import Card from "./Card";

const Reactjs = () => {
  return (
    <>
      <Navbar />
      <h2 id="heading">React JS Library</h2>
      <p id="click">Current Website Itself is made with React. </p>
      <Card
        title={"My Resume"}
        site={"#"}
        url={Pic}
        description={
          "A React website that shows up my Virtual Resume"
        }
      />
      
      <p id="heading">More Projects Coming Soon ...</p>
    </>
  );
};

export default Reactjs;
