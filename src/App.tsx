import React from "react";
import "./App.css";
import Challenges from "./components/challenges/Challenges";
import SideMenu from "./components/sideMenu/SideMenu";
import Calendar from "./components/calendar/Calendar";
import Router from "./components/router/Router";

const App = () => {
  return (
    <div className="app">
      <SideMenu />
      <Router />
      <Calendar />
    </div>
  );
};

export default App;
