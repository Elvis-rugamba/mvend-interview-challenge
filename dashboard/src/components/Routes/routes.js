const routes = [
//   {
//     path: "/",
//     redirect: "/login",
//   },
  {
    path: "/login",
    name: "login",
    component: "Login",
  },
  {
    path: "/admin",
    name: "admin",
    icon: "crown",
    component: "../../layouts/DashboardLayout",
    routes: [
      {
        path: "/admin/units/:id",
        name: "view-unit",
        icon: "smile",
        component: "../../pages/Unit",
      },
      {
        path: "/admin/units/:id/edit",
        name: "edit-unit",
        component: "../../pages/Unit",
      },
      {
        path: "/admin/units/new",
        name: "add-unit",
        component: "../../pages/Add",
      },
    ],
  },
  {
    name: "reporting",
    icon: "table",
    path: "/reporting",
    component: "../../pages/Reporting",
  },
  {
    component: "Error404",
  },
  {
    component: "Error404",
  },
];

export default routes;
