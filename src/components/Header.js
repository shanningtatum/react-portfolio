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
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌞" : "🌛"}
          <span className="sr-only">
            {darkMode ? "Enable light mode" : "Enable dark mode"}
          </span>
        </button>
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
      </div>
    </header>
  );
}

export default Header;
