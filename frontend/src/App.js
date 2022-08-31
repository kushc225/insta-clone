import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { login } = useSelector((state) => state.loginReducer);
  return (
    <>
      {login && <Navbar />}

      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
