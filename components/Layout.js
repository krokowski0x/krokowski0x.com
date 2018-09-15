import React from "react";
import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <div style={{ height: "100%", padding: "0 5%" }}>{props.children}</div>
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
          color: #fff;
          background-color: #24292e;
        }
        h1 {
          font-size: 8rem;
        }
        h2 {
          font-size: 3rem;
        }
        a {
          margin: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
