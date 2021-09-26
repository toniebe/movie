import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../context/UserContex";
import { message } from "antd";

const Login = () => {
  let history = useHistory();
  const { setLoginStatus } = useContext(UserContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let typeOfInput = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: typeOfInput });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        Cookies.set("user", user.name, { expires: 1 });
        Cookies.set("email", user.email, { expires: 1 });
        Cookies.set("token", token, { expires: 1 });
        setLoginStatus(true);
        history.push("/gameList");
      })
      .catch((err) => {
        alert(err);
        setInput({
          email: "",
          password: "",
        });
      });
  };

  return (
    <>
      <form style={{ width: "50%", margin: "auto", padding: "50px" }} onSubmit={handleSubmit}>
        <label className="input-group-text">Email : </label>
        <input className="form-control" type="email" name="email" required value={input.email} onChange={handleChange} />
        <br />
        <label className="input-group-text">Password : </label>
        <input className="form-control" type="password" name="password" required value={input.password} onChange={handleChange} />
        <br />
        <br />
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
