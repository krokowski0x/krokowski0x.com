import CVEntry from "./CVEntry";

const Projects = props => {
  return (
    <div>
      <h2>Projects</h2>
      <CVEntry
        name="Project Offtop (Team Project)"
        date="March 2018 - Present"
        items={[
          `Designed and mocked big web app, that would be the dashboard of all student's activity at the university`,
          `Created a team of about 40 students, run a series of lectures about Front-End Development`,
          `Delegated teams for data fetching, backend services and database creation`,
          `Currently creating git issues, holding meetings on scalability \& security and further developing API`
        ]}
      />
      <CVEntry
        name="CryptoPi.js"
        date="June 2018"
        items={[
          `Developed gesture-controlled, real time, WebSocket-based cryptocurrency price-tracking app`,
          `Utilized GDAX API, controlled hardware with Raspberry Pi/Arduino, JohnnyFive.js and Node.js`,
          `Currently adding Google Assistant voice integration with custom commands`
        ]}
      />
      <CVEntry
        name="ShallowBlue.js"
        date="May 2018"
        items={[
          `Programmed and visualized chess AI using minimax with alfa-beta pruning`,
          `Developed separate branches for application state based on Redux and React Context API`,
          `Highly focused on code readability and used modern tools such as React, ESLint, Webpack 4 and Sass`,
          `Currently applying deep neural network in Tensorflow.js with reinforcement learning method`
        ]}
      />
      <CVEntry
        name="Live Sorting Test"
        date="April 2018"
        items={[
          `Programmed an app for testing different sorting alghoritms and comparing their big O execution time`,
          `Achieved high performance due to real-time, server-side, multi-threaded Node.js computing`,
          `Designed custom API, fully mocked it with Web Workers, then built it with Express`
        ]}
      />
      <CVEntry
        name="Interactive AVL Tree"
        date="March 2018"
        items={[
          `Implemented an AVL Tree in Vanilla ES6+, based on Object-Oriented Programming principles`,
          `Visualized the tree with semantic HTML5, CSS3 Grid and p5.js, then deployed app to Heroku`
        ]}
      />
      <CVEntry
        name="Other Notable Projects"
        date="2017 / 2018"
        items={[
          `Developed Chrome extension adding popular Candle Size Indicator utility to Coinbase Pro`,
          `Developed tab sorting Chrome Extension with functional JavaScript for own convenience`,
          `Developed Node.js app checking air pollution with geolocation and weather APIs`,
          `Developed and fully tested MATLAB/C/C++/8051 Assembly apps being supervised by course tutors`
        ]}
      />
    </div>
  );
};

export default Projects;
