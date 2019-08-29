
import Network from "./Network";
import Box1 from "./Box1";
import Token from "./Token";

export default [
  {
    path: "/",
    exact: true,
    component: Box1
  },
  {
    path: "/network",
    exact: true,
    component: Network
  },
  {
    path: "/token",
    exact: true,
    component: Token
  }
];
