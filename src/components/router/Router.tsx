import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { IRoute } from "./types";

const renderRoute = ({ path, Component }: IRoute) => {
  return <Route path={path} element={<Component />} key={path} />;
};

const Router = () => {
  return <Routes>{routes.map(renderRoute)}</Routes>;
};
export default Router;
