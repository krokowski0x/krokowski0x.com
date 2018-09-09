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
        <h2>
          I do code sometimes. 👨‍💻 <br />
          Otherwise I'm just hopelessly scrolling through Stack Overflow 🤨
        </h2>
        {this.state.links.map(link => (
          <Link icon={link} />
        ))}
        <style jsx>{`
          h1 {
            font-size: 8rem;
          }
          h2 {
            font-size: 3rem;
          }
        `}</style>
      </Layout>
    );
  }
}
