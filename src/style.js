import { styled } from "styled-components";

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
  justify-content: space-around;
  /* padding: 4rem 6rem; */
  ul {
    list-style: none;
    display: flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-items: center;
    li {
      color: rgba(255, 255, 255, 0.87);
      /* margin: 10px 0; */
      margin-left: 20px;
      a{
        text-decoration: none;
        color: inherit;

      }
    }

  }


  @media screen and (max-width: 500px) {
    ul{
      display: none;
    }
  }

`;

export const SignIn = styled.div`
display: flex;
  /* display: flex; */
    justify-content: flex-end;
    align-items: center;
`

export const NavbarMenu = styled.div`

`
