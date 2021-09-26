import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [dataMovie, setDataMovie] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [dataGame, setDataGame] = useState([]);
  const [gameDetails, setGameDetails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [inputGame, setInputGame] = useState({
    name: "",
    genre: "",
    singlePlayer: true,
    multiplayer: true,
    platform: "",
    release: 2000,
    image_url: "",
  });

  const [inputMovie, setInputMovie] = useState({
    description: "",
    duration: 0,
    genre: "",
    image_url: "",
    rating: 0,
    review: "",
    title: "",
    year: 1980,
  });

  // movie data

  const fetchDataMovie = async () => {
    const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`);

    setDataMovie(
      result.data.map((x) => {
        return {
          id: x.id,
          title: x.title,
          description: x.description,
          genre: x.genre,
          year: x.year,
          duration: x.duration,
          rating: x.rating,
          image_url: x.image_url,
          review: x.review,
        };
      })
    );
  };

  const fetchMovieDetails = async (id_movie) => {
    const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id_movie}`);
    console.log(result);
    setMovieDetails({
      id: result.data.id,
      title: result.data.title,
      description: result.data.description,
      genre: result.data.genre,
      year: result.data.year,
      duration: result.data.duration,
      rating: result.data.rating,
      image_url: result.data.image_url,
      review: result.data.review,
    });

    setInputMovie({
      id: result.data.id,
      title: result.data.title,
      description: result.data.description,
      genre: result.data.genre,
      year: result.data.year,
      duration: result.data.duration,
      rating: result.data.rating,
      image_url: result.data.image_url,
      review: result.data.review,
    });

    setCurrentIndex(result.data.id);
  };

  const functionDeleteMovie = (idMovie) => {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        let newDataMovie = dataGame.filter((res) => {
          return res.id !== idMovie;
        });
        setDataGame(newDataMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const functionSubmitMovie = () => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-movie`,
        {
          description: inputMovie.description,
          duration: inputMovie.duration,
          genre: inputMovie.genre,
          image_url: inputMovie.image_url,
          rating: inputMovie.rating,
          review: inputMovie.review,
          title: inputMovie.title,
          year: inputMovie.year,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const functionUpdateMovie = (idMovie) => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-movie/${idMovie}`,
        {
          description: inputMovie.description,
          duration: inputMovie.duration,
          genre: inputMovie.genre,
          image_url: inputMovie.image_url,
          rating: inputMovie.rating,
          review: inputMovie.review,
          title: inputMovie.title,
          year: inputMovie.year,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // game data

  const fetchDataGame = async () => {
    const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`);

    setDataGame(
      result.data.map((x) => {
        return {
          id: x.id,
          name: x.name,
          genre: x.genre,
          release: x.release,
          image_url: x.image_url,
          platform: x.platform,
          singleplayer: x.singleplayer,
          multiplayer: x.multiplayer,
          statusPlayer: statusPlayer(x.singlePlayer, x.multiplayer),
        };
      })
    );
  };

  const statusPlayer = (single, multi) => {
    if (single === 1 && multi === 1) {
      return "singleplayer & multiplayer";
    } else if (single === 1 && multi == 0) {
      return "singleplayer";
    } else if (single == 0 && multi == 1) {
      return "multiplayer";
    } else {
      return "none";
    }
  };

  const fetchGameDetails = async (id_game) => {
    const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${id_game}`);
    console.log("ini single player ", result.data.singlePlayer);
    setGameDetails({
      id: result.data.id,
      name: result.data.name,
      genre: result.data.genre,
      release: result.data.release,
      image_url: result.data.image_url,
      platform: result.data.platform,
      singleplayer: result.data.singlePlayer,
      multiplayer: result.data.multiplayer,
      statusplayer: statusPlayer(result.data.singlePlayer, result.data.multiplayer),
    });

    setInputGame({
      name: result.data.name,
      genre: result.data.genre,
      release: result.data.release,
      image_url: result.data.image_url,
      platform: result.data.platform,
      singleplayer: result.data.singlePlayer,
      multiplayer: result.data.multiplayer,
    });

    setCurrentIndex(result.data.id);
  };

  const functionDeleteGame = (idGame) => {
    axios
      .delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        let newDataGame = dataGame.filter((res) => {
          return res.id !== idGame;
        });
        setDataGame(newDataGame);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const functionSubmitGame = () => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/data-game`,
        {
          name: inputGame.name,
          genre: inputGame.genre,
          singlePlayer: inputGame.singlePlayer,
          multiplayer: inputGame.multiplayer,
          platform: inputGame.platform,
          release: inputGame.release,
          image_url: inputGame.image_url,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const functionUpdateGame = (idGame) => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${idGame}`,
        {
          name: inputGame.name,
          genre: inputGame.genre,
          singlePlayer: inputGame.singlePlayer,
          multiplayer: inputGame.multiplayer,
          platform: inputGame.platform,
          release: inputGame.release,
          image_url: inputGame.image_url,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fungsi = {
    fetchDataMovie,
    fetchDataGame,
    fetchMovieDetails,
    fetchGameDetails,
    functionDeleteGame,
    functionDeleteMovie,
    functionSubmitGame,
    functionUpdateGame,
    functionSubmitMovie,
    functionUpdateMovie,
  };
  return (
    <MovieContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        inputMovie,
        setInputMovie,
        inputGame,
        setInputGame,
        dataMovie,
        setDataMovie,
        movieDetails,
        setMovieDetails,
        dataGame,
        setDataMovie,
        gameDetails,
        setGameDetails,
        fungsi,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
