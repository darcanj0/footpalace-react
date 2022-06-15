import "./Footer.css";

import footPalaceLogo from "assets/logos/footpalace.png";
import wppLogo from "assets/logos/whatsapp.png";
import emailLogo from "assets/logos/email.png";
import lnkdnLogo from "assets/logos/linkedin.png";
import githubLogo from "assets/logos/github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <p id="rights">All rights reserved ®</p>
      <img height="40px" src={footPalaceLogo} alt="Foot Palace logo" />
      <div id="contacts">
        <a href="https://wa.me/5561983474695" target="_blank">
          <img height="30px" src={wppLogo} alt="Whatsapp contact" />
        </a>
        <a href="mailto:daniel.thomas.aarcanjo@gmail.com?subject=Contact FootPalace">
          <img height="30px" src={emailLogo} alt="Email contact" />
        </a>
        <a href="https://www.linkedin.com/in/darcanjoo/" target="_blank">
          <img height="30px" src={lnkdnLogo} alt="Linkedin page" />
        </a>
        <a href="https://github.com/darcanj0" target="_blank">
          <img height="30px" src={githubLogo} alt="Github page" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
