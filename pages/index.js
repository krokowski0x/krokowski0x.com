import React, { Component } from "react";

import Layout from "../components/Layout";
import Link from "../components/Link";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      links: {
        GitHub: "https://github.com/krokowski0x",
        LinkedIn: "https://www.linkedin.com/in/krokowski0x/",
        Quora: "https://www.quora.com/profile/Rafa%C5%82-Kr%C3%B3kowski-1/answers",
        Medium: "https://medium.com/@krokowski.dx",
        Gmail: "mailto:krokowski.dx@gmail.com",
        Resume: "https://github.com/krokowski0x/Resume"
      },
    };
  }

  render() {
    return (
      <Layout>
        <h1>Rafał Krókowski</h1>
        <h2>
          I do code sometimes.
          <br />
          Otherwise I'm just hopelessly scrolling through Stack Overflow.
        </h2>
        {Object.keys(this.state.links).map(link => (
          <Link icon={link} key={link} url={this.state.links[link]} />
        ))}
      </Layout>
    );
  }
}
