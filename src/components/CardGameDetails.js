import React from "react";

const CardGameDetails = (props) => {
  return (
    <div className="card">
      <div>
        <h2>{props.name}</h2>
        <h5>Release Year : {props.release}</h5>
        <img style={{ width: "50%", height: "300px", objectFit: "cover" }} src={props.image} />
        <br />
        <br />
        <div>
          <strong>Genre: {props.genre}</strong>
          <br />
          <strong>Player: {props.player}</strong>
          <br />
          <strong>Platform: {props.platform} </strong>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CardGameDetails;
