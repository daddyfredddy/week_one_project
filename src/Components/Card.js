import React from "react";

function Card(props) {
  return (
    <div className={`${props.color} container`}>
      <img src={props.imgUrl} alt="icon" />
      <h2>{props.name}</h2>
      <p>{props.body}</p>
      <button>{props.btn}</button>
    </div>
  );
}

export default Card;
