import "./Footer.css";

import footPalaceLogo from "assets/logos/footpalace.png";
import wppLogo from "assets/logos/whatsapp.png";
import emailLogo from "assets/logos/email.png";
import lnkdnLogo from "assets/logos/linkedin.png";
import githubLogo from "assets/logos/github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div id="contacts">
        <img height="30px" src={wppLogo} alt="Whatsapp contact" />
        <img height="30px" src={emailLogo} alt="Email contact" />
        <img height="30px" src={lnkdnLogo} alt="Linkedin page" />
        <img height="30px" src={githubLogo} alt="Github page" />
      </div>
      <img height="40px" src={footPalaceLogo} alt="Foot Palace logo" />
      <p id="rights">All rights reserved ®</p>
    </div>
  );
};

export default Footer;
