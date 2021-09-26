import React, { useEffect, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { useParams } from "react-router-dom";
import CardGameDetails from "../../components/CardGameDetails";

const GameDetails = () => {
  const { gameDetails, fungsi } = useContext(MovieContext);
  const { fetchGameDetails } = fungsi;
  let { idGame } = useParams();
  console.log(gameDetails);
  useEffect(() => {
    fetchGameDetails(idGame);
  }, []);

  return (
    <>
      {/* {gameDetails.map((val, index) => {
        return <CardGameDetails name={val.name} release={val.release} image={val.image_url} genre={val.genre} platform={val.platform} />;
      })} */}
      <CardGameDetails name={gameDetails.name} release={gameDetails.release} image={gameDetails.image_url} genre={gameDetails.genre} platform={gameDetails.platform} player={gameDetails.statusplayer} />
    </>
  );
};

export default GameDetails;
