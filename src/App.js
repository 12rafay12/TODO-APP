import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Signin from "./Components/Signin/Signin";
import Todo from "./Components/Todo/Todo";
import UserDetails from "./Components/UserDetails/UserDetails";
import Navbar from "./Components/NavBar/Navbar";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.users.userProfile.token);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* If token exists, route to Todo */}
        {token ? (
          <Route path="/" element={<Navigate to="/todo" />} />
        ) : (
          <Route path="/" element={<Signin />} />
        )}
        <Route path="todo" element={<Todo />} />
        <Route path="userdetails" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
