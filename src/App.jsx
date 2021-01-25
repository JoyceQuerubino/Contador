import React, { Fragment } from "react";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";

import Routes from "./routes";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
}
