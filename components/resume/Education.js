import CVEntry from "./CVEntry";

export default props => {
  return (
    <div>
      <h2>Education</h2>
      <CVEntry
        name="Wroclaw University of Science and Technology"
        job="Bachelor of Engineering in Control Engineering and Robotics"
        location="Wroclaw, Poland"
        date="Oct. 2016 - Exp. Jun. 2021"
        items={[
          `Took courses including Computer Science, Algorithm Design, Artificial Intelligence and Advanced Calculus \& Algebra`
        ]}
      />
    </div>
  );
};
