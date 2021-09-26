import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const CardGame = (props) => {
  let history = useHistory();

  const detail = (idGame) => {
    history.push(`/gameDetail/${idGame}`);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.genre}</Card.Text>
          <Button variant="primary" onClick={() => detail(props.id)}>
            View More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardGame;
