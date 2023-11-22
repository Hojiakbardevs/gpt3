import React from "react";
import { Gradient_text, WhatgptBac, WhatgptBacText } from "../style";
import Features from "./features";

const Whatgpt = () => {
  return (
    <WhatgptBac className="section__padding section__margin" id="why3gpt">
     <Features title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      <WhatgptBacText>
        <Gradient_text>
          The possibilities are beyond your imagination
        </Gradient_text>
        <p>Explore The Library</p>
      </WhatgptBacText>
      <div>
      <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Features title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </WhatgptBac>
  );
};

export default Whatgpt;
