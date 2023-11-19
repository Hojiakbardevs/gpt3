import React from "react";
import HeaderImg from "./img/Header Illustration.svg";
import Navbar from "./Components/navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <h1>
        Salom dunyo
        <img src={HeaderImg} alt="" />
      </h1>
    </div>
  );
};

export default App;
