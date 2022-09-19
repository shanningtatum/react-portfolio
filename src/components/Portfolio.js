import { useContext } from "react";
import { projects } from "./toolkit";
import { DarkModeContext } from "./DarkModeContext";

function Portfolio() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      id="portfolio"
      className={darkMode ? "portfolioSection darkTheme" : "portfolioSection"}
    >
      <div className="wrapper">
        <h2>Portfolio</h2>
        <ul>
          {projects.map((project) => {
            const projectTools = [];
            const toolUsed = project.tool;

            for (let tool in toolUsed) {
              const toolName = toolUsed[tool];
              projectTools.push(toolName);
            }

            return (
              <li>
                <div className="projectContainer">
                  <div className="projectTool">
                    {projectTools.map((tool) => {
                      return <p>{tool}</p>;
                    })}
                  </div>
                  <div className="projectImage">
                    <img
                      src={project.img}
                      alt={`Device mockup image of ${project.name} project.`}
                    />
                  </div>
                  <div className="projectText">
                    <h3>{project.name}</h3>
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
