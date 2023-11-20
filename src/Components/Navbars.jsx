import React, { useState } from "react";
import logo from "./../img/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Wrapper, SignIn, NavbarMenu } from "../style";
const Navbars = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div>
      <Wrapper className="section__padding">
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
        <SignIn>
          <p>Sign in</p>
          <button>Sign Up</button>
        </SignIn>
        <NavbarMenu>
          {toogleMenu ? (
            <RiCloseLine size={27} onClick={() => setToogleMenu(false)} />
          ) : (
            <RiMenu3Line size={27} onClick={() => setToogleMenu(true)} />
          )}
          {toogleMenu && (
            <Wrapper>
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
              <SignIn>
                <p>Sign in</p>
                <button>Sign Up</button>
              </SignIn>
            </Wrapper>
          )}
        </NavbarMenu>
      </Wrapper>
    </div>
  );
};

export default Navbars;
