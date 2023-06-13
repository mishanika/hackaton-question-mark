import React from "react";
import "./Layout.scss";
import SideMenu from "../sideMenu/SideMenu";
import Calendar from "../calendar/Calendar";
import Router from "../router/Router";
import Login from "../login/Login";
import { useNavigate } from "react-router";

const Layout = () => {
  let uNavigate = useNavigate();

  return localStorage.getItem("uId") ? (
    <div className="app">
      <SideMenu />
      <Router />
      <Calendar />
    </div>
  ) : (
    <Login navigate={uNavigate}/>
  );
};

export default Layout;
