import React from "react";
import {WhatgptBacText } from "../style";

const Features = ({ title, text }) => {
  return (
    <WhatgptBacText>
      <div>
        <div></div>
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </WhatgptBacText>
  );
};

export default Features;
