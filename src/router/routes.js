import Home from "view/home";
import trip from "view/trip";
import index from "view/index";

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/trip",
    component: trip
  },
  {
    path: "/",
    component: index
  }
];

export default routes;
