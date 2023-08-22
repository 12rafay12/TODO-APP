import React from "react";
import "./SigninStyles.scss";
import Input from "./Components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
// email:"atuny0@sohu.com"
// firstName:  "Terry"
// gender:  "male"
// id : 1
// image :"https://robohash.org/hicveldicta.png"
// lastName: "Medhurst"
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY5MjY5ODQzMywiZXhwIjoxNjkyNzAyMDMzfQ.VoAVG3yy-KGdiZ7jQkH2N-ZhoFFRpp9fEdl3_i4k49k"
// username: "atuny0"

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    axios
      .post("https://dummyjson.com/auth/login", data)
      .then(function (response) {
        console.log(response.data);
        alert("Successfully Signed In!")
      })
      .catch(function (error) {
        console.log(error);
        alert("Invalid Credentials!")
      });
  };
 

  return (
    <div>
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txt_field">
            <Input type="text" placeholder="username" register={register} />
            <span></span>
          </div>
          <div className="txt_field">
            <Input type="password" placeholder="password" register={register} />

            <span></span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
