import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

:root {
--primary-color:#CCCF18;
--accent-color: #F3949A;
--black:#1E1E1E;
--white: #fff;
--primary-font: "Saira Stencil One";
--secondary-font: "Roboto";

}


  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }
`;

export default GlobalStyled;
