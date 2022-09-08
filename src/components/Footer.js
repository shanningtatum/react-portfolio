import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Footer() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer className={darkMode ? "footer footerDark" : "footer footerLight"}>
      <h3>Created by Me</h3>
    </footer>
  );
}

export default Footer;
