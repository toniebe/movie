import React, { useState, createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const updatePassword = () => {
    axios
      .post(
        `https://backendexample.sanbersy.com/api/change-password`,
        {
          current_password: input.current_password,
          new_password: input.new_password,
          new_confirm_password: input.new_confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const fungsi = {
    updatePassword,
  };
  return <UserContext.Provider value={{ input, setInput, loginStatus, setLoginStatus, fungsi }}>{props.children}</UserContext.Provider>;
};
