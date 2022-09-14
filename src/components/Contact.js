import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Contact() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      id="contact"
      className={darkMode ? "contactSection darkTheme" : "contactSection"}
    >
      <div className="wrapper">
        <h2>Contact Me</h2>
      </div>
    </section>
  );
}

export default Contact;
