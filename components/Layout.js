import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />
      </Head>
      {props.children}
      <footer>
        <span>See all of my work at: </span>
        <GitHubLink size={50} project="" style={{ display: "block" }} />
      </footer>
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </Container>
  );
};
//background-color: #181717;
