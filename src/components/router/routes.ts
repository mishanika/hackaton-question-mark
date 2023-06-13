import Challenges from "../challenges/Challenges";
import Login from "../login/Login";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    path: "/",
    Component: Challenges,
  },
];
