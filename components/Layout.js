import React from "react";
import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Kanit:600"
          rel="stylesheet"
        />
      </Head>
      <div style={{ height: "100%", padding: "0 5%" }}>{props.children}</div>
    </div>
  );
};

export default Layout;
