import React from "react";
import { Rate, Button } from "antd";
import { Link, useHistory } from "react-router-dom";

const CardMovie = (props) => {
  let history = useHistory();
  const view = (idMovie) => {
    history.push(`/movie/${idMovie}`);
  };
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
        </div>
        <Button type="primary" onClick={() => view(props.id)}>
          View More
        </Button>
      </div>
    </div>
  );
};

export default CardMovie;
