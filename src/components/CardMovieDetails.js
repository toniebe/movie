import React from "react";
import { Rate, Button } from "antd";

const CardMovieDetails = (props) => {
  return (
    <div className="card">
      <div>
        <h2>{props.title}</h2>
        <h5>Release Year : {props.year}</h5>
        <img style={{ width: "50%", height: "300px", objectFit: "cover" }} src={props.image} />
        <br />
        <br />
        <div>
          <strong>Duration: {props.duration}</strong>
          <br />
          <strong>
            Rating:
            <Rate disabled allowHalf defaultValue={props.rating} count={10} />
          </strong>
          <br />
          <strong>Genre: {props.genre} </strong>
          <br />
          <strong style={{ marginRight: "10px" }}>Review : {props.review}</strong>
          <br />
        </div>
        <p>
          <strong style={{ marginRight: "10px" }}>Description : {props.description}</strong>
        </p>
      </div>
    </div>
  );
};

export default CardMovieDetails;
