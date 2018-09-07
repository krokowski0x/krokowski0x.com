import React, { Component } from "react";

import Layout from "../components/Layout";
import Link from "../components/Link";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        "GitHub",
        "CodeTrace",
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Twitter",
        "Gmail",
        "Medium",
        "Resume"
      ]
    };
  }

  render() {
    return (
      <Layout>
        <h1>Rafał Krókowski</h1>
        <h3>Some clever description.</h3>
        {this.state.links.map(link => (
          <Link size={50} icon={link} />
        ))}
      </Layout>
    );
  }
}
