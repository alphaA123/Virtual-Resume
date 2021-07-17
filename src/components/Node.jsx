import React from "react";
import Navbar from "./Navbar/navbar";
import Pic1 from "../images/Secret.jpg";
import Pic from "../images/todo.jpg";
import Card from "./Card";
const Node = () => {
  return (
    <>
      <Navbar />
      
      <h2 id="heading">Node.js</h2>
      <p id="click">Click on Image to Navigate to the Website. </p>
      <Card
        title={"To-Do List App"}
        site={"https://radiant-reef-44729.herokuapp.com"}
        url={Pic}
        description={
          "To-do List App which make use of Noje.js for Network Connection."
        }
      />
      <Card
        title={"SECRETS APP"}
        url={Pic1}
        site={"https://serene-beach-86805.herokuapp.com"}
        description={
          "A Website where you login/register and share your secrets anonmously"
        }
      />
      <p id="heading">More Projects Coming Soon ...</p>
    </>
  );
};

export default Node;
