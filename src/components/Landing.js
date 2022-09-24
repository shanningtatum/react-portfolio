import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Landing() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <section
      className={darkMode ? "landingSection darkTheme" : "landingSection"}
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
              <a href="https://www.linkedin.com/in/shannon-tao-b95159240/">
                <FaLinkedinIn />
                <span className="sr-only">Link to LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/shanningtatum">
                <FaGithub />
                <span className="sr-only">Link to GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/drawingsbyshanner/">
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
