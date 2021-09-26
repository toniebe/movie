import { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { MovieContext } from "../../context/MovieContext";
import { useEffect } from "react";
const MovieForm = () => {
  const { currentIndex, setCurrentIndex, inputMovie, setInputMovie, fungsi } = useContext(MovieContext);
  const { functionSubmitMovie, fetchMovieDetails, functionUpdateMovie } = fungsi;
  let history = useHistory();
  let { idMovie } = useParams();

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    setInputMovie({ ...inputMovie, [name]: typeOfValue });
  };

  useEffect(() => {
    fetchMovieDetails(idMovie);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentIndex === -1) {
      functionSubmitMovie();
    } else {
      functionUpdateMovie(idMovie);
    }
    setCurrentIndex(-1);
    history.push("/movieList");
    setInputMovie({
      description: "",
      duration: 0,
      genre: "",
      image_url: "",
      rating: 0,
      review: "",
      title: "",
      year: 1980,
    });
  };
  return (
    <>
      <div className="row">
        <div className="section">
          <h1>Movie Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="title">title:</label>
              <input className="form-control" type="text" value={inputMovie.title} required={true} name="title" id="title" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="genre">genre: </label>
              <input className="form-control" type="text" value={inputMovie.genre} required={true} name="genre" id="genre" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="year">year: </label>
              <input className="form-control" type="number" value={inputMovie.year} required={true} min={1980} max={2021} name="year" id="year" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="duration">duration: </label>
              <input className="form-control" type="number" value={inputMovie.duration} required={true} min={0} name="duration" id="duration" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="rating">rating: </label>
              <input className="form-control" type="number" value={inputMovie.rating} required={true} min={0} max={10} name="rating" id="rating" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="review">review: </label>
              <input className="form-control" type="text" value={inputMovie.review} required={true} name="review" id="review" onChange={handleChange} min={2007} max={2021} />
            </div>
            <div className="form-group">
              <label for="image_url">image url: </label>
              <input className="form-control" type="text" value={inputMovie.image_url} required={true} name="image_url" id="image_url" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="description">description: </label>
              <textarea className="form-control" type="text" value={inputMovie.description} required={true} name="description" id="description" onChange={handleChange} />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieForm;
