import React from "react";
import { Parallax } from "react-spring";

import Layout from "../components/Layout";
import Page from "../components/Page";

export default class App extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to);
  render() {
    return (
      <Layout>
        <Parallax
          className="container"
          ref="parallax"
          pages={3}
          horizontal
          scrolling={false}
        >
          <Page
            offset={0}
            gradient="pink"
            caption="who we are"
            first="Lorem ipsum"
            second="dolor sit"
            onClick={() => this.scroll(1)}
          />
          <Page
            offset={1}
            gradient="teal"
            caption="what we do"
            first="consectetur"
            second="adipiscing elit"
            onClick={() => this.scroll(2)}
          />
          <Page
            offset={2}
            gradient="tomato"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll(0)}
          />
        </Parallax>
      </Layout>
    );
  }
}
