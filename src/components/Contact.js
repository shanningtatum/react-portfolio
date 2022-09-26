import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      id="contact"
      className={darkMode ? "contactSection darkTheme" : "contactSection"}
    >
      <div className="wrapper">
        {/* CONTACT HEADER START */}
        <div className="contactHeader">
          <h2>Let's Connect</h2>
          <div className="contactSocial">
            <ul>
              <li>
                <a href="">
                  <span className="sr-only">Link to LinkedIn</span>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <span className="sr-only">Link to GitHub</span>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <span className="sr-only">Link to Instagram</span>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* CONTACT HEADER END */}
        <div className="contactForm">
          <form action="https://formspree.io/f/mgeqwyog" method="POST">
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="username">Name:</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    className="usernameInput"
                    required
                  />
                </li>
                <li>
                  <label htmlFor="subject">Subject (Optional):</label>
                  <input
                    type="text"
                    name="subject"
                    className="subjectInput"
                    placeholder="Your Subject"
                  />
                </li>
                <li>
                  <label htmlFor="email">Your Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="emailInput"
                    placeholder="Your Email"
                  />
                </li>
                <li>
                  <label htmlFor="telephone">Phone Number: </label>
                  <input
                    type="tel"
                    name="telephone"
                    className="phoneInput"
                    placeholder="+0 (000) 000 0000"
                    required
                  />
                </li>
              </ul>
            </fieldset>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              cols="8"
              rows="5"
              placeholder="Hey Shannon! Love your stuff. Let's set up a time to chat."
              required
            ></textarea>
            <button className="submitButton">Submit Now</button>
          </form>
          <div className="contactInfo">
            <h3>Want To Connect?</h3>
            <p>
              Send me a message if you would like to work on something together
              🤝, chat about escape rooms 🔐, video games 🎮, or suggest a cool
              book 📚 for me to read!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
