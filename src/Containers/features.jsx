import React from "react";
import {WhatgptBacText, Whatgptblog } from "../style";

const Features = ({ title, text }) => {
  return (
    <WhatgptBacText>
      <Whatgptblog>
        <div></div>
        <h1>{title}</h1>
      </Whatgptblog>
      <p>{text}</p>
    </WhatgptBacText>
  );
};

export default Features;
