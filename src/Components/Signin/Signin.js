
import "./SigninStyles.scss";

import Input from "./Components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../features/UserSlice";
import { useNavigate } from 'react-router-dom';



const Signin = () => {
  
  let navigate = useNavigate();
  const users = useSelector((state) => state.users.userProfile);
  console.log(users);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  // const [user, setUser]=useState({});
  
 
  const onSubmit = (data) => {
    console.log(data);
    
    axios
      .post("https://dummyjson.com/auth/login", data)
      .then(function (response) {
        // console.log(response.data);
        dispatch(addUser(response.data));
        // setUser(response.data);
        // localStorage.setItem("user",JSON.stringify(response.data))
        // if (Object.keys(response.data).length > 0) {
        //   dispatch(setInitialState(response.data));
        // }
        alert("Successfully Signed In!");
        localStorage.setItem("user",JSON.stringify(response.data))
        navigate('/todo');
      })
      .catch(function (error) {
        // console.log(error);
        alert("Invalid Credentials!");
      });
      
  };
 

  return (
    <div className="Signinbody">
      <div className="center ">
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
