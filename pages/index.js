import React, { Component } from "react";
import Typing, { Cursor } from "react-typing-animation";
import Layout from "../components/Layout";
import GitHubLink from "../components/GitHubLink";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Typing speed={50}>
          <h1>This h1 will get typed.</h1>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
        </Typing>
        <h2>See mine here.</h2>
        <GitHubLink size={200} project="" />
      </Layout>
    );
  }
}
