import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router";

const Register = () => {
  let history = useHistory();
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <div style={{ margin: "0 auto", width: "50%", padding: "50px" }}>
        <form onSubmit={handleSubmit}>
          <label className="input-group-text">name: </label>
          <input className="form-control" type="text" name="name" required onChange={handleChange} value={input.name} />
          <br />
          <label className="input-group-text">email: </label>
          <input className="form-control" type="email" name="email" required onChange={handleChange} value={input.email} />
          <br />
          <label className="input-group-text">Password: </label>
          <input className="form-control" type="password" name="password" required onChange={handleChange} value={input.password} />
          <br />
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
