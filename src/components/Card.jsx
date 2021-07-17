import React from "react";

const Card = (props) => {
  return (
    <div className="align_card">
      <div className="card">
        <a href={props.site} target="_blank"><img src={props.url} alt="Avatar" style={{ width: "100%" }} /></a>
        <div className="container">
          <h4>
            <b>{props.title}</b>
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
