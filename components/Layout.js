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
      `}</style>
    </div>
  );
};

export default Layout;
