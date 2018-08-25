import React from "react";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    color: #fff;
    background-color: #181717;
  }
`;

const Cointainer = styled.div`
  margin: 5%;
  text-align: center;
`;

export default props => {
  return <Cointainer>{props.children}</Cointainer>;
};
