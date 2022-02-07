import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import About_us from "views/About_us.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Service from "views/Service.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/About_us",
    name: "About us",
    icon: "nc-icon nc-badge",
    component: About_us,
    layout: "/admin",
  },
  {
    path: "/Service",
    name: "Service",
    icon: "fas fa-cogs",
    component: Service,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fas fa-bell",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "fa fa-user",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "fa fa-table",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "fas fa-keyboard",
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
