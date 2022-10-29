import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Del from "./components/subcomponent/Del";
// import { useSelector } from "react-redux";

const App = () => {
  // const { login } = useSelector((state) => state.loginReducer);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/del" element={<Del />} />
      </Routes>
    </>
  );
};

export default App;
