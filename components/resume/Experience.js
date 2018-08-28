import CVEntry from "./CVEntry";

export default props => {
  return (
    <div>
      <h2>Work Experience</h2>
      <CVEntry
        name="Incognito Cocktail Bar/Kofeina"
        job="Bartender, then PR/Social Media Marketing Manager"
        location="Wroclaw, Poland"
        date="Jul. 2016 - Present"
        items={[
          `Gained strong foundation on how the web and users' attention works`,
          `Learned how to design custom UX, create products tailored to client's needs`,
          `Worked long hours with high performing team in fast paced, high stress environment`
        ]}
      />
      <CVEntry
        name="Manuli Ekobal Sp. z.o.o"
        job="SEO Specialist/UI Designer/Site Administrator"
        location="Wroclaw, Poland"
        date="May 2017 - May 2018"
        items={[
          `Proposed and implemented full redesign of company's website`,
          `Reduced website's payload size by a third, improved page speed rankings, cut load time by 50%`,
          `Boosted monthly traffic from around 5k to above 13k visits/month, organized meetings, met deadlines`,
          `Gained experience working with servers and site maintenance in big, international, B2B company`
        ]}
      />
    </div>
  );
};
