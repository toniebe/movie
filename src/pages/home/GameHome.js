import React, { useEffect, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Container, Row, Col } from "react-bootstrap";
import CardGame from "../../components/CardGame";

const GameHome = () => {
  const { dataGame, fungsi } = useContext(MovieContext);
  const { fetchDataGame } = fungsi;

  useEffect(() => {
    fetchDataGame();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Game </h1>
            <Row>
              {dataGame.map((val, index) => {
                return (
                  <Col>
                    <CardGame id={val.id} name={val.name} genre={val.genre} image={val.image_url} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameHome;
