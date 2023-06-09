import React from "react";
import "./Challenges.scss";
import donikghoul from "../../assets/donikghoul.png";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HikingIcon from "@mui/icons-material/Hiking";
import PedalBikeOutlinedIcon from "@mui/icons-material/PedalBikeOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import ReplayIcon from "@mui/icons-material/Replay";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

const Challenges = () => {
  const arr = [1];
  const challengesItemsRender = () => (
    <div className="challenge-wrapper">
      <div className="activity-type">
        <div className="activity-circle">
          <DirectionsRunIcon />
        </div>
        <span className="activity-name">Active running without obstacles</span>
      </div>
      <div className="info-boxes">
        <div className="info-box info-date">
          <EventRepeatIcon /> 29 Mar
        </div>
        <div className="info-box info-duration">
          <ReplayIcon />
          30 days
        </div>
        <div className="info-box info-distance">
          <NearMeOutlinedIcon /> 18 km
        </div>
      </div>
      <div className="location">
        <div className="location-circle">
          <LocationOnOutlinedIcon />
        </div>
        <div className="location-text">
          <div className="place">Martin Luther King・3210</div>
          <div className="location-pin">Location pin</div>
        </div>
      </div>
      <div className="line"></div>
      <div className="participants-apply-btn">
        <div className="participants">
          <div className="participant-person">
            <img src={donikghoul} alt="participant" />
          </div>
          <div className="participant-person">
            <img src={donikghoul} alt="participant" />
          </div>
        </div>
        <div className="apply-btn">APPLY</div>
      </div>
    </div>
  );
  const changeColor = (e: React.MouseEvent<HTMLElement>) => {
    const elements = document.querySelectorAll<HTMLElement>(".bottom-part-item");

    elements.forEach((item) => {
      if (item === (e.target as HTMLElement).closest(".bottom-part-item")) {
        item.closest(".bottom-part-item")?.classList.add("active");
      } else {
        item.closest(".bottom-part-item")?.classList.remove("active");
      }
    });
    console.log(e.target);
  };
  return (
    <div className="challenges-wrapper">
      <div className="challenges">
        <div className="challenges-header">
          <div className="header-top-part">
            <span className="challenges-title">Challenges</span>
            <div className="challenges-create">Create new</div>
          </div>
          <div className="header-bottom-part">
            <div className="bottom-part-inner-wrapper" onClick={changeColor}>
              <div className="bottom-part-item">All</div>
              <div className="bottom-part-item">Mine</div>
              <div className="bottom-part-item">
                <DirectionsRunIcon />
              </div>
              <div className="bottom-part-item">
                <HikingIcon />
              </div>
              <div className="bottom-part-item">
                <PedalBikeOutlinedIcon />
              </div>
            </div>
            <div className="bottom-part-item">
              <FilterAltOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="challenges-main">{arr.map(challengesItemsRender)}</div>
      </div>
    </div>
  );
};

export default Challenges;
