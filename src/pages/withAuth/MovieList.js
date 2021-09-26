import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
const MovieList = () => {
  const { dataMovie, fungsi } = useContext(MovieContext);
  const { fetchDataMovie, functionDeleteMovie } = fungsi;

  let history = useHistory();

  useEffect(() => {
    fetchDataMovie();
  }, [fetchDataMovie]);

  const handleDelete = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    functionDeleteMovie(idMovie);
  };

  const handleEdit = (event) => {
    let idMovie = event.currentTarget.value;
    history.push(`/movieForm/${idMovie}`);
  };

  return (
    <>
      <div className="row">
        <div className="section">
          <div className="table-wrapper">
            <h1>Movie List</h1>
            <Link to="/movieForm">
              <Button type="primary">Add Movie</Button>
            </Link>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Description</th>
                  <th>Rating</th>
                  <th>Review</th>
                  <th>Duration</th>
                  <th>Year</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataMovie.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val.title}</td>
                      <td>{val.genre}</td>
                      <td>{val.description}</td>
                      <td>{val.rating}</td>
                      <td>{val.review}</td>
                      <td>{val.duration}</td>
                      <td>{val.year}</td>

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

export default MovieList;
