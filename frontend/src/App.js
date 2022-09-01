import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import { useSelector } from "react-redux";

const App = () => {
  // const { login } = useSelector((state) => state.loginReducer);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
