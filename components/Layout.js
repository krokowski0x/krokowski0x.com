import React from "react";
import { Container } from "semantic-ui-react";

export default props => {
  return (
    <Container>
      {props.children}
      <style jsx global>{`
        body {
          margin: 5%;
          font-family: "Roboto", sans-serif;
          color: #fff;
          background-color: #181717;
        }
      `}</style>
    </Container>
  );
};
