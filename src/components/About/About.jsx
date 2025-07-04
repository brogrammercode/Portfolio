import "./About.css";
import aboutData from "./aboutData";

const About = () => {
  const { about, team, description } = aboutData;

  return (
    <section className="about-container">
      <div className="about-section about">
        <h2 className="section-title">{about.title}</h2>
        <p className="section-content">{about.content}</p>
      </div>

      <div className="about-section team">
        <h2 className="section-title">{team.title}</h2>
        <p className="section-content">
          {team.companies.map((company, idx) => (
            <span key={idx}>
              {company.name} <br />
              {company.duration}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className="about-section description">
        <h2 className="section-title">{description.title}</h2>
        <p className="section-content">
          {description.content.map((para, idx) => (
            <span key={idx}>
              {para}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
