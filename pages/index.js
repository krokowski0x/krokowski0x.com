import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import Layout from "../components/Layout";
import Hello from "../components/Hello";
import Summary from "../components/resume/Summary";
import Projects from "../components/resume/Projects";
import Experience from "../components/resume/Experience";
import Education from "../components/resume/Education";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Hello />
        <Summary />
        <Projects />
        <Experience />
        <Education />
      </Layout>
    );
  }
}
