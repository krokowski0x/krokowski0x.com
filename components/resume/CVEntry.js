export default props => {
  return (
    <div>
      <h3>{props.name}</h3>
      {props.job ? <h3>{props.job}</h3> : <div />}
      {props.location ? <span>{props.location}</span> : <div />}
      <span>{props.date}</span>
      <ul>
        {props.items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
