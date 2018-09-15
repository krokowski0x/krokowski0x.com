import Links from "../utils/Links";
import Icons from "./Icons";

const Link = props => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={Links[props.icon]}>
      <svg
        aria-labelledby="Icon"
        role="img"
        fill="white"
        height="4rem"
        viewBox="0 0 24 24"
      >
        <path d={Icons[props.icon]} />
      </svg>
    </a>
  );
};

export default Link;
