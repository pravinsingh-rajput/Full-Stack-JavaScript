import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Footer>
      <p>copyright © {year}</p>
    </Footer>
  );
};

export default Footer;
