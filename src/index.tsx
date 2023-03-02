import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/saira-stencil-one";
import "@fontsource/roboto";
import GlobalStyled from "./styles/GlobalStyled";
import Button from "./components/Button/Button";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
    <Button text="Sign up" />
  </React.StrictMode>
);
