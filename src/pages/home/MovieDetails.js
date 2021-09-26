import CardMovie from "../../components/CardMovie";
import React, { useEffect, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { useParams } from "react-router-dom";
import CardMovieDetails from "../../components/CardMovieDetails";

const MovieDetails = () => {
  const { movieDetails, fungsi } = useContext(MovieContext);
  const { fetchMovieDetails } = fungsi;
  let { idMovie } = useParams();

  useEffect(() => {
    fetchMovieDetails(idMovie);
  }, []);

  console.log(movieDetails.title);

  return (
    <>
      <div className="row">
        <div className="section">
          <CardMovieDetails
            title={movieDetails.title}
            description={movieDetails.description}
            year={movieDetails.year}
            duration={movieDetails.duration}
            genre={movieDetails.genre}
            rating={movieDetails.rating}
            review={movieDetails.review}
            image={movieDetails.image_url}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
