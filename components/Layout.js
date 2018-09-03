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
      {/* <footer>
        <span>See all of my work at: </span>
        <GitHubLink size={50} project="" style={{ display: "block" }} />
      </footer> */}
      <style jsx global>{`
        html,
        body,
        #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: white;
        }
        html,
        body,
        div,
        a,
        i,
        button,
        select,
        option,
        optgroup,
        hr,
        br {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: default;
        }

        .container > div > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text {
          pointer-events: none;
          justify-content: start !important;
          font-family: "Kanit", sans-serif;
          line-height: 0px;
          text-transform: uppercase;
        }

        .number {
          font-size: 450px;
          color: #373c4c;
        }

        .number span {
          display: inline-block;
          position: relative;
          transform: translate3d(-35%, 0, 0);
        }

        .header {
          margin-left: 350px;
          font-size: 70px;
          color: white;
        }

        .stripe {
          height: 2px;
          width: auto;
        }

        .slopeBegin {
          background-color: #20232f;
          clip-path: polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%);
        }

        .slopeEnd {
          clip-path: polygon(
            70% 0,
            100% 0,
            calc(100% - 20vw) 100%,
            calc(70% - 20vw) 100%
          );
        }

        .slopeBegin,
        .slopeEnd {
          position: absolute;
          width: 140%;
          height: 100%;
          cursor: pointer;
        }

        .pink {
          background: linear-gradient(to right, deeppink 0%, coral 100%);
        }

        .teal {
          background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
        }

        .tomato {
          background: linear-gradient(to right, tomato 0%, gold 100%);
        }
      `}</style>
    </div>
  );
};

export default Layout;
//background-color: #181717;
