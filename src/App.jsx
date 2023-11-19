import React from "react";
import { Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'
import Book from './pages/Book'
import Booklist from "./pages/Booklist";
import Navbar from "./Components/navbar";
import NotFounds from "./pages/NotFounds";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/booklist" element={<Booklist/>} />
        <Route path="*" element={<NotFounds/>}/>
      </Routes>
    </div>
  );
};

export default App;
