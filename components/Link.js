import Icons from "simple-icons";
import Links from "../utils/Links";

const Link = props => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={Links[props.icon]}>
      {Icons["GitHub"].svg}
    </a>
  );
};

export default Link;
