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
          height: 100vh;
          background-size: 400% 400%;
          background: linear-gradient(45deg, rgb(0, 214, 100), rgb(0, 255, 255));
        }
        h1 {
          font-size: 8rem;
          margin-bottom: 0;
        }
        h2 {
          font-size: 3rem;
          line-height: 4rem;
        }
        a {
          margin: 0 2rem 5rem 0;
        }
      `}</style>
    </div>
  );
};

export default Layout;
