import "./About.css";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-tile about">
        <div className="about-title">ABOUT</div>
        <div className="about-subtitle">
          Jo (He/Him) designs interfaces. He thrives in complex, ambiguous
          problem spaces focused around interactive media, digital tooling, and
          multimodal interaction. He studied Communication Design↗ and
          Human-Computer Interaction↗ at Carnegie Mellon University, an
          experience he holds fondly and will cherish for the rest of his life.
          If you have an interesting idea, please get in touch↗.
        </div>
      </div>
      <div className="about-tile team">
        <div className="about-title">TEAM</div>
        <div className="about-subtitle">
          Notion <br /> 2025 - Present <br /> <br />
          Azuki <br /> 2023 - 2025
        </div>
      </div>
      <div className="about-tile description">
        <div className="about-title">DESCRIPTION</div>
        <div className="about-subtitle">
          Building beautiful tools for your life’s work. <br /> <br /> <br />
          First full-time design hire. Scaled design team to 5 people. Built
          Anime.com, Animee, and interactive experiences for the Azuki IP.{" "}
          <br /> <br />
          Design consulting for emerging AI and productivity companies. Notable
          clients include Anysphere (Cursor AI)1, Rox2, andBrain Technologies
          (Natural AI)3.
        </div>
      </div>
    </div>
  );
};

export default About;
