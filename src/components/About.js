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
            I'm a front-end developer currently working as a web designer at
            Costco Wholesale Canada.
          </p>
          <p>
            I made my career transition about a year ago because I enjoy the
            unique challenges that coding requires and being able to satisfy my
            innate curiosity of how things work with my creative side through
            front-end development is what keeps me motivated to learn more.
          </p>
          <p>
            In my current role, I am responsible for designing and coding weekly
            marketing material on <a href="https://www.costco.ca/">Costco.ca</a>
            , brand showcase pages, and email marketing.
          </p>
          <p>
            In my free time I do like to dabble in side projects. My most recent
            project is a loading screen submission website for an online gaming
            community of about 1000+ members.
          </p>
          <a href="https://apex-loadingscreen.netlify.app/">
            Check it out here!
          </a>
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
