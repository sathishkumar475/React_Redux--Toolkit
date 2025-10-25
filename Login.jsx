import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let changename = useNavigate();
  let { newuser } = useParams();

  let handlechange = () => {
    changename("/");
  };
  return (
    <div>
      Login -{newuser}
      <button onClick={handlechange}> move to home</button>
    </div>
  );
};

export default Login;
