import { useContext } from "react";
import { projects } from "./toolkit";
import { DarkModeContext } from "./DarkModeContext";

function Portfolio() {
  const { darkMode } = useContext(DarkModeContext);

  const moreInfo = (e) => {
    const targetSibling = e.target.nextSibling;
    targetSibling.classList.toggle("active");
  };

  return (
    <section
      id="portfolio"
      className={darkMode ? "portfolioSection darkTheme" : "portfolioSection"}
    >
      <div className="wrapper">
        <h2>Portfolio</h2>
        <ul className="projectList">
          {projects.map((project, index) => {
            const projectTools = [];
            const toolUsed = project.tool;

            for (let tool in toolUsed) {
              const toolName = toolUsed[tool];
              projectTools.push(toolName);
            }

            return (
              <li key={index} tabIndex="0" className="projectLi">
                <div className="projectContainer">
                  <div
                    className="projectImage"
                    onClick={(e) => {
                      moreInfo(e);
                    }}
                  >
                    <img
                      src={project.img}
                      alt={`Device mockup of ${project.name} project.`}
                    />
                  </div>
                  <div className="projectInfo">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <div className="projectLinks">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        LIVE
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GITHUB
                      </a>
                    </div>
                    <div className="projectTools">
                      <ul>
                        {projectTools.map((tool, index) => {
                          return (
                            <li key={index}>
                              <p>{tool}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
