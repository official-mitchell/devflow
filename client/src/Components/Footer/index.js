import React from "react";

import styles from "./footer.scss";

import Logo from "../../Images/logo.svg";

const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="container text-center">
        <img className="footer_logo" src={Logo} />
        <p>Devflow ©2019</p>
      </div>
    </div>
  );
};

export default Footer;
