import React, { Component } from "react";

import Layout from "../components/Layout";
import Link from "../components/Link";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        "GitHub",
        "Gmail",
        "LinkedIn",
        "Instagram",
        "Facebook",
        "Twitter",
        "Medium",
        "Resume"
      ]
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
        {this.state.links.map(link => (
          <Link icon={link} />
        ))}
      </Layout>
    );
  }
}
