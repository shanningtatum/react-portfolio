import { projects } from "./toolkit";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="aboutMeSection">
          <h2>About Me</h2>
        </div>
        <div className="toolKitSection">
          {projects.map((project) => {
            console.log(project);
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
