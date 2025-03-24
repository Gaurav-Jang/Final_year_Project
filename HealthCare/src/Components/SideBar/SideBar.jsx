import React from "react";
import "../css/SideBar.css";
import * as md from "react-icons/md";
import { FaUserCircle, FaBrain } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { TbReportMedical } from "react-icons/tb";
import { IoLogOutSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function SideBar({ sidebarToggle, setSidebarToggle, changeUser, adminData }) {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser"); // Remove the user from localStorage
    changeUser(null); // Update state to trigger re-render
  };
  console.log(adminData);

  return (
    <nav className={sidebarToggle ? "side-nav" : "side-nav-collapse"}>
      <div className="app-name">
        <h3 className={sidebarToggle ? "brand-expand" : "brand-collapse"}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            HMS System
          </Link>
        </h3>
      </div>
      <div className="user-login">
        <FaUserCircle style={{ fontSize: "30px" }} />
        <h3 className={sidebarToggle ? "username" : "username-collapse"}>
          {adminData.firstName}
        </h3>
      </div>
      <div className="nav-menu ">
        <ul>
          <li>
            <NavLink
              to="/"
              className={sidebarToggle ? "nav-item" : "nav-item-collapse"}
              activeclassname="active"
            >
              <md.MdDashboard style={{ fontSize: "28px" }} />
              <span className={sidebarToggle ? "span-expand" : "span-collapse"}>
                Dashboard
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/MyAppointment"
              className={sidebarToggle ? "nav-item" : "nav-item-collapse"}
            >
              <md.MdMeetingRoom style={{ fontSize: "28px" }} />
              <span className={sidebarToggle ? "span-expand" : "span-collapse"}>
                My Appointment
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="MedicalReport"
              className={sidebarToggle ? "nav-item" : "nav-item-collapse"}
            >
              <TbReportMedical style={{ fontSize: "28px" }} />
              <span className={sidebarToggle ? "span-expand" : "span-collapse"}>
                Medical Reports
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="BrainTumor"
              className={sidebarToggle ? "nav-item" : "nav-item-collapse"}
            >
              <FaBrain style={{ fontSize: "28px" }} />
              <span className={sidebarToggle ? "span-expand" : "span-collapse"}>
                Brain Tumor
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contactus"
              className={sidebarToggle ? "nav-item" : "nav-item-collapse"}
            >
              <md.MdHeadphones style={{ fontSize: "28px" }} />
              <span className={sidebarToggle ? "span-expand" : "span-collapse"}>
                Contact Us
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* logout */}
      <div className="nav-menu logout">
        <ul>
          <li>
            <div
              onClick={logOutUser}
              className={sidebarToggle ? "nav-item" : "nav-item-collapse"}
            >
              <IoLogOutSharp style={{ fontSize: "28px" }} />
              <span className={sidebarToggle ? "span-expand" : "span-collapse"}>
                Logout
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
