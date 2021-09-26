import CardMovie from "../../components/CardMovie";
import React, { useEffect, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const MovieHome = () => {
  const { dataMovie, fungsi } = useContext(MovieContext);
  const { fetchDataMovie } = fungsi;

  useEffect(() => {
    fetchDataMovie();
  }, []);

  return (
    <>
      <div className="row">
        <div className="section">
          {dataMovie.map((val, index) => {
            return (
              <>
                <CardMovie id={val.id} title={val.title} description={val.description} year={val.year} duration={val.duration} genre={val.genre} rating={val.rating} review={val.review} image={val.image_url} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieHome;
