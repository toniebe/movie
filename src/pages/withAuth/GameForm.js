import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import { useHistory, Link, useParams } from "react-router-dom";

const GameForm = () => {
  const { inputGame, setInputGame, currentIndex, setCurrentIndex, fungsi } = useContext(MovieContext);
  const { functionSubmitGame, functionUpdateGame, fetchGameDetails } = fungsi;
  let history = useHistory();
  let { idGame } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentIndex === -1) {
      functionSubmitGame();
    } else {
      functionUpdateGame(idGame);
    }
    setCurrentIndex(-1);
    history.push("/gameList");
  };

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    setInputGame({ ...inputGame, [name]: typeOfValue });
  };

  useEffect(() => {
    fetchGameDetails(idGame);
  }, []);

  const handleChangeCB = (e) => {
    let { checked } = e.target;
    let name = e.target.name;
    setInputGame({
      ...inputGame,
      [name]: checked,
    });
  };

  return (
    <>
      <div className="row">
        <div className="section">
          <h1>Game Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="nama">Game Name:</label>
              <input className="form-control" type="text" value={inputGame.name} required={true} name="name" id="nama" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="genre">genre: </label>
              <input className="form-control" type="text" value={inputGame.genre} required={true} name="genre" id="genre" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="release">release: </label>
              <input className="form-control" type="number" value={inputGame.release} required={true} min={2000} max={2021} name="release" id="release" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label for="platform">platform: </label>
              <input className="form-control" type="text" value={inputGame.platform} required={true} name="platform" id="platform" onChange={handleChange} min={2007} max={2021} />
            </div>
            <div className="form-group">
              <label for="image_url">image url: </label>
              <input className="form-control" type="text" value={inputGame.image_url} required={true} name="image_url" id="image_url" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label for="player">Status Player: </label>
              <div id="player">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="singlePlayer" name="singePlayer" value={inputGame.singlePlayer} onChange={handleChangeCB} defaultChecked={inputGame.singlePlayer} />
                  <label className="form-check-label" for="singlePlayer">
                    SinglePlayer
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="multiplayer" name="multiplayer" value={inputGame.multiplayer} onChange={handleChangeCB} defaultChecked={inputGame.multiplayer} />
                  <label className="form-check-label" for="multiplayer">
                    MultiPlayer
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GameForm;
