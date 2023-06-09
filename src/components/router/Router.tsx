import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { IRoute } from "./types";

const renderRoute = ({ path, Component }: IRoute) => {
  return localStorage.getItem("auth") ? <Route path={path} element={<Component />} key={path} /> : <Navigate to="" />;
};

const Router = () => {
  return <Routes>{routes.map(renderRoute)}</Routes>;
};
export default Router;
