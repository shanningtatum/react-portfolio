import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Landing() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={darkMode ? "landingSection landingDark" : "landingSection"}
    >
      <div className="wrapper">
        <h1>
          Hello, I'm <span className="strongName">Shannon Tao</span> Front-End
          Web Developer <span className="greyText">in Toronto</span>
        </h1>
        <div className="scrollIcon">
          <div
            className={darkMode ? "mouseImage mouseImageDark" : "mouseImage"}
          ></div>
          <div
            className={
              darkMode
                ? "circleBackground circleBackgroundDark"
                : "circleBackground"
            }
          ></div>
        </div>
        <div className="socialLinks">
          <ul>
            <li>
              <a href="#">
                <FaLinkedinIn />
                <span className="sr-only">Link to LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
                <span className="sr-only">Link to GitHub</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
                <span className="sr-only">Link to Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Landing;
