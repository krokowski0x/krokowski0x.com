import Icons from "simple-icons";
import Links from "../utils/Links";
import { GitHub } from "../utils/Icons";

const Link = props => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={Links[props.icon]}>
      <svg
        aria-labelledby="simpleicons-github-icon"
        role="img"
        fill="white"
        height="50px"
        viewBox="0 0 24 24"
      >
        <GitHub />
      </svg>
    </a>
  );
};

export default Link;
