import React from "react";
import "./SideMenu.scss";
import donikghoul from "../../assets/donikghoul.png";
import logo from "../../assets/github-logo.png";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-inner-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="side-menu-nifo">
          <img src={donikghoul} alt="avatar" className="avatar" />
          <span className="name">Donik Ghoul</span>
          <div className="expirience">
            expirience: <span className="xp">255</span>{" "}
          </div>
        </div>
        <div className="change-page-menu">
          <div className="challenges-item change-page-item">
            <EventAvailableIcon />
            Challenges
          </div>
          <div className="profile-item change-page-item">
            <PersonOutlineOutlinedIcon />
            Profile
          </div>
          <div className="settings-item change-page-item">
            <SettingsIcon />
            Settings
          </div>
        </div>
      </div>
      <span className="logout">Logout</span>
    </div>
  );
};

export default SideMenu;
