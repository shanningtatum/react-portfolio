import { useContext, useState } from "react";
import { projects } from "./toolkit";
import { DarkModeContext } from "./DarkModeContext";

function Portfolio() {
  const { darkMode } = useContext(DarkModeContext);
  const [displayInfo, setDisplayInfo] = useState(false);

  const moreInfo = (e) => {
    console.log(e.target.nextSibling);
    const targetSibling = e.target.parentElement;
    targetSibling.classList.toggle("active");
  };

  const closeInfo = (e) => {
    const targetParent = e.target.parentElement;
    targetParent.classList.toggle("active");
  };
  return (
    <section
      id="portfolio"
      className={darkMode ? "portfolioSection darkTheme" : "portfolioSection"}
    >
      <div className="wrapper">
        <h2>Portfolio</h2>
        <ul>
          {projects.map((project, index) => {
            const projectTools = [];
            const toolUsed = project.tool;

            for (let tool in toolUsed) {
              const toolName = toolUsed[tool];
              projectTools.push(toolName);
            }

            return (
              <li key={index}>
                <div
                  className={
                    darkMode ? "projectContainer darkTheme" : "projectContainer"
                  }
                >
                  <div
                    className="projectImage"
                    onClick={(e) => {
                      moreInfo(e);
                    }}
                  >
                    <img
                      src={project.img}
                      alt={`Device mockup image of ${project.name} project.`}
                    />
                    <div
                      className={
                        displayInfo ? "projectInfo active" : "projectInfo"
                      }
                    >
                      <p onClick={(e) => closeInfo(e)}>X</p>
                      <h3>{project.name}</h3>
                      <p>{project.desc}</p>
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
