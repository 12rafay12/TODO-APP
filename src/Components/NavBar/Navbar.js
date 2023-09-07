
import "./Navbar.scss"
import { useEffect } from "react";
import {  Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { clearUser,setInitialState, } from "../../features/UserSlice";
import { clearInitialState } from "../../features/TodoSlice";


const Navbar = () => {
 
  const dispatch=useDispatch();

  let userName=useSelector((state)=>state.users.userProfile.username);
  
  const token=useSelector((state)=>state.users.userProfile.token)
  const handleClick=()=>{
    dispatch(clearUser());
    
      localStorage.removeItem("list");
      localStorage.removeItem("user");
      dispatch(clearInitialState());
     

  }
  useEffect(()=>{
    const isUser=JSON.parse(localStorage.getItem("user")||"{}");
    if (Object.keys(isUser).length > 0) {
      dispatch(setInitialState(isUser));
    }
  },[]);
  
  return (
   
      <nav className="navbar">
        {/* {className="logo"} */}
        <div >TODO APP: Hello {userName}</div>
        <ul className="nav-links">
          <li>
            {token? <Link to="/todo" >Todo </Link>:null}
          </li>
          <li>
          {token? null:<Link to="/" ></Link>}
          </li>
          <li>
           { token?<Link to="/userdetails">User Details</Link>:null}
          </li>
          <li>
          {token? <Link to="/"  onClick={handleClick}>Signout</Link>:null}
          </li>
        </ul>
      </nav>
    
  );
};

export default Navbar;
