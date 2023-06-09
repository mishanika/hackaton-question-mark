import Challenges from "../challenges/Challenges";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    path: "/",
    Component: Challenges,
  },
];
