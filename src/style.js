import { styled } from "styled-components";
import "./index.css";

export const Gradient_bg = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
`;

export const Gradient_text = styled.div`
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  ul {
    display: flex;
    list-style: none;
    margin: 0 2rem;
    li,
    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    li {
      margin: 0 1rem;
    }
  }
  @media screen and (max-width: 1120px) {
    ul {
      display: none;
    }
    &#home {
      margin-top: 2rem;
    }
    #ImgIllustrator {
      min-width: 60%;
    }
  }
  @media screen and (max-width: 700px) {
    &#home {
      display: block;
    }
    #ImgIllustrator {
      width: 100%;
    }
  }
`;

// ! Img header

export const SignIn = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  /* flex-direction: column; */
  button {
    margin-left: 26px;
    background: var(--color-button);
    width: 152px;
    height: 58px;
    color: #fff;
    /* font-family: Manrope; */
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const NavbarMenu = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1120px) {
    display: flex;
    position: relative;
    /* z-index: 10; */
    ${Wrapper} {
      top: 40px;
      right: 0;
      display: block;
      border-radius: 5px;
      position: absolute;
      background-color: var(--color-blog);
      /* left: 0; */
      padding: 2rem 1rem;
      z-index: 1000;

      ul li {
        width: 30vw;
        margin: 1rem;
        text-align: left;
        a {
          cursor: pointer;
        }
      }

      ${SignIn} {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 500;
        button {
          width: 90%;
          margin: 20px 0 0;
        }
      }
    }
    ul,
    ${SignIn} {
      display: block;
    }
  }
`;

export const Logomenu = styled.div`
  display: flex;
  align-items: center;
`;

//! header qismini qilishni boshladim

export const Content = styled.div`
  /* width: 70vw; */
  p {
    padding: 33px 0;
    color: var(--color-text);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Inputtext = styled.div`
  display: flex;
  input {
    background-color: var(--color-footer);
    width: 100%;
    padding: 20px 24px;
    border: none;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 5px 0px 0px 5px;
    flex: 0.75;
    color: var(--color-text);
    border: none;
    outline: none;
  }
  ::placeholder {
    color: var(--color-text);
  }
  button {
    flex: 0.25;
    background: var(--color-button);
    border-radius: 0px 5px 5px 0px;
    border: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    color: white;
    padding: 0 20px;
    /* max-width: 174px; */
  }
`;
export const PersonalImg = styled.div`
  /* position: relative; */
  margin-top: 2rem;
  display: block;
  /* border: 1px solid salmon; */
  /* left: 0; */
  p {
    /* padding: 20px; */
    color: white;
    font-size: 16px;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid salmon; */
  }
`;
export const Divimg = styled.div`
  /* position: inherit; */
  margin: 0 auto;
  img {
    margin-right: -15px;
  }
  margin-right: 25px;
`;
export const WrapperBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  img {
    filter: grayscale(80%);
    padding: 10px;
  }
`;
export const WhatgptBac = styled.div`
  background: var(--color-footer);

  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const WhatgptBacText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Gradient_text} {
    font-size: 34px;
    font-style: normal;
    font-weight: 800;
    line-height: 45px; /* 132.353% */
    max-width: 700px;
  }
  p {
    color: var(--color-subtext);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
  }

  @media screen and (max-width: 700px) {
    display: block;
  }
`;
export const Wrapperblog = styled.div`
  img {
    width: 200px;
    height: auto;
  }
`;
