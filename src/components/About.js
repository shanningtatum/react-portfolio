import { toolkit } from "./toolkit";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function About() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      id="about"
      className={darkMode ? "aboutSection darkTheme" : "aboutSection"}
    >
      <div className="wrapper">
        <div className="aboutMeSection">
          <h2>About Me</h2>
          <p>
            I'm a front-end developer with experience as a digital artist,
            supervisor, and a customer service rep. My education background in
            the social services makes inclusion and diversity a priority for me
            and allows me to see things from another perspective - the user
            perspective.
          </p>
          <p>
            My experience as a digital artist makes me sweat the small stuff,
            the tiny pixels that folks don't notice &nbsp;
            <span className="tinyFont">(I notice it!)</span>.
          </p>
          <p>
            I enjoy the unique challenges that coding requires and being able to
            satisfy my innate curiosity of how things work with my creative side
            through front-end development is what keeps me motivated to learn
            more.
          </p>
          <p>
            I'm always trying to find ways to make things more efficient while
            making it aesthetically pleasing and I would love to join a team
            that not only fosters a great learning environment but allows for me
            to grow as a developer and an individual.
          </p>
        </div>
        <div
          className={darkMode ? "toolKitSection darkTheme" : "toolKitSection"}
        >
          <h2>My Toolkit</h2>
          <ul>
            {toolkit.map((tool, index) => {
              return (
                <li
                  key={index}
                  className={darkMode ? "toolList darkTheme" : "toolList"}
                >
                  {tool.img}
                  <p>{tool.tool}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
