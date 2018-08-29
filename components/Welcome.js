import Typing, { Cursor } from "react-typing-animation";
import { Button, Icon, Container } from "semantic-ui-react";
import GitHubLink from "../components/GitHubLink";

export default props => {
  return (
    <div style={{ height: "100vh", textAlign: "center" }}>
      {/* <Typing speed={30}>
        <h1>What up!</h1>
        <Typing.Delay ms={1000} />
        <h1>I'm Rafał Krókowski</h1>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={100} />
        <h1>Let's see what I can offer Your company!</h1>
        <Typing.Reset count={1} delay={500} />
      </Typing> */}
      <h2>Hi! I am</h2>
      <h1>Rafał Krókowski</h1>
      <Container textAlign="center">
        <Button inverted circular size="huge" color="blue" icon="angle down" />
      </Container>
    </div>
  );
};
