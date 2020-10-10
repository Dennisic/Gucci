import Login from "../pages/Login";
import Register from "../components/Register";
export default [
  //专门配置各种路由的地方   路由和路由器要区分
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
