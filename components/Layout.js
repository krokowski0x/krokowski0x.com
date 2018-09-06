import React from "react";
import Head from "next/head";
import GitHubLink from "./GitHubLink";

const Layout = props => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Kanit:600"
          rel="stylesheet"
        />
      </Head>
      {props.children}
      <footer>
        <span>See all of my work at: </span>
        <GitHubLink size={50} project="" style={{ display: "block" }} />
      </footer>
    </div>
  );
};

export default Layout;
