import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={darkMode ? "header headerDark" : "header headerLight"}>
      <a href="#mainContent" className="skipLink">
        Skip to Main Content
      </a>
      <div className="wrapper">
        <div className="logo">
          <a href="#">ST</a>
        </div>
        <nav className="navBar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={darkMode ? "themeContainer darkTheme" : "themeContainer"}
        >
          <button className="themeButton" onClick={toggleDarkMode}>
            <span className="sr-only">
              {darkMode ? "Enable light mode" : "Enable dark mode"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
