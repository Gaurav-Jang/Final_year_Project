import React from "react"; // react
import "../css/Footer.css"; // custom css file

const Footer = ({ sidebarToggle, setSidebarToggle }) => {
  const currentYear = new Date().getFullYear(); // year function

  return (
    <div className={sidebarToggle ? "footer" : "footer-expand"}>
      <span>Health Care System, {currentYear}. All Rights Reserved.</span>
    </div>
  );
};

export default Footer;
