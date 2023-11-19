import React, { useState } from "react";
import logo from "./../img/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbars = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#why3gpt">What is GPT?</a>
        </li>
        <li>
          <a href="#openai">Open AI</a>
        </li>
        <li>
          <a href="#casestydies">Case Studies</a>
        </li>
        <li>
          <a href="#library">Library</a>
        </li>
      </ul>

      <div className="design">
        <p>Sign in</p>
        <button>Sign Up</button>
      </div>
      {toogleMenu ? (
        <RiCloseLine size={27} onClick={() => setToogleMenu(false)} />
      ) : (
        <RiMenu3Line size={27} onClick={() => setToogleMenu(true)} />
      )}
    </div>
  );
};

export default Navbars;
