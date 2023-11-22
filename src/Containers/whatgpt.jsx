import React from "react";
import { Gradient_text, WhatgptBac, WhatgptBacText } from "../style";
import Features from "./features";

const Whatgpt = () => {
  return (
    <WhatgptBac className="section__padding section__margin" id="why3gpt">
      <Features />
      <WhatgptBacText>
        <Gradient_text>
          The possibilities are beyond your imagination
        </Gradient_text>
        <p>Explore The Library</p>
      </WhatgptBacText>
      <div>
        <Features />
        <Features />
        <Features />
      </div>
    </WhatgptBac>
  );
};

export default Whatgpt;
