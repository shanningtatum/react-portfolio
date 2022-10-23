import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer className={darkMode ? "footer footerDark" : "footer footerLight"}>
      <div className="wrapper">
        <h3>
          Created by <a href="https://github.com/shanningtatum">Shannon Tao</a>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
