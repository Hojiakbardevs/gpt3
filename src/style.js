import { styled } from "styled-components";
import './index.css'

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
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 62.557px;
    height: 16.016px;
  }

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
  }
`;

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

      ul li{
        width: 30vw;
        margin:1rem;
        text-align: left;
        a{
          cursor: pointer;
        }
      }

    
      ${SignIn} {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-weight: 500;
        button{
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
