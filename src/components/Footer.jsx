import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/VanessaLan" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Lien vers mes repo GitHub">
        <FontAwesomeIcon className="footer_icon" icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/vanessa-langlois-2b8862328/" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Lien vers mes repo GitHub">
        <FontAwesomeIcon className="footer_icon" icon={faLinkedinIn} />
      </a>

      <a
        href="mailto:vanessa.langlois@live.fr"
        target="_blank"
        rel="noreferrer"
        aria-label="Lien pour m'envoyer un mail">
        <FontAwesomeIcon className="footer_icon" icon={faEnvelope} />
      </a>
    </footer>
  );
};

export default Footer;
