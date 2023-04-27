import Home from "./Pages/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import Posts from "./Pages/Posts/Posts";
const App = () => {
  const user = localStorage.getItem("userName")
  console.log("dddd",user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={!user ? <Login /> : <Navigate to={"/"} /> } />
        {/* <Route path={'/'} element={<Home />} /> */}
        <Route path={'/'} element={user ? <Home /> : <Navigate to={"/login"} />} />
        <Route path={'/users'} element={<Users />} />
        <Route path={'/posts'} element={<Posts />} />
      </Routes> 
    </BrowserRouter>
  );
};
export default App;
