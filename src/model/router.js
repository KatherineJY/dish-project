import Home from "../component/Home";
import User from "../component/User";
import UserList from "../component/User/UserList";
import UserAdd from "../component/User/UserAdd";
import UserEdit from "../component/User/UserEdit";
import Shop from "../component/Shop";

let routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/user",
    component: User,
    routes:[   /*嵌套路由*/
      {
        path: "/user/",
        component: UserList
      },
      {
        path: "/user/add",
        component: UserAdd
      },
      {
        path: "/user/edit",
        component: UserEdit
      }
    ]
  }
];

export default routes;
