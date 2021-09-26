import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

const GameList = () => {
  const { dataGame, fungsi } = useContext(MovieContext);
  const { functionDeleteGame, fetchDataGame } = fungsi;
  let history = useHistory();

  useEffect(() => {
    fetchDataGame();
  }, [fetchDataGame]);

  const handleDelete = (event) => {
    let idGame = parseInt(event.currentTarget.value);
    console.log(idGame);
    functionDeleteGame(idGame);
  };

  const handleEdit = (event) => {
    let idGame = event.currentTarget.value;
    history.push(`/gameForm/${idGame}`);
  };

  return (
    <>
      <div className="row">
        <div className="section">
          <div className="table-wrapper">
            <h1>Game List</h1>
            <Link to="/gameForm">
              <Button type="primary">Add Game</Button>
            </Link>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Genre</th>
                  <th>Release</th>
                  <th>Platform</th>
                  <th>status player</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataGame.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.genre}</td>
                      <td>{val.release}</td>
                      <td>{val.platform}</td>
                      <td>{val.statusPlayer}</td>

                      <td>
                        <Button type="primary" icon={<EditFilled />} style={{ background: "#c4c43d" }} value={val.id} onClick={handleEdit} />
                        <Button type="primary" danger icon={<DeleteFilled />} value={val.id} onClick={handleDelete} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameList;
