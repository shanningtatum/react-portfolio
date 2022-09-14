import { useContext } from "react";
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
      </div>
    </section>
  );
}

export default Portfolio;
