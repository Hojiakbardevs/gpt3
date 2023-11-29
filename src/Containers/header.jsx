import React from "react";
import Headerimg from "./../img/header.webp";
import { Wrapper, Gradient_text, Content, Inputtext} from "./../style";
import Personal from "../Components/Personal";
const Header = () => {
  return (
    <Wrapper id="home" >
      <Content>
        <Gradient_text>
          Let’s Build Something amazing with GPT-3 OpenAI
        </Gradient_text>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <Inputtext>
          <input type="email"  placeholder="Your Email Address" />
         <button>Get Started</button>
        </Inputtext>
        <Personal/>
      </Content>
      <img src={Headerimg} alt="" className="scale-up-center" id="ImgIllustrator" />
    </Wrapper>
  );
};

export default Header;


  