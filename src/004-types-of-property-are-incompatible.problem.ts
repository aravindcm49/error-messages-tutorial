const routingConfig: {
  routes: {
    path: string;
    component: string;
  }[];
} = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "AboutComponent", // 12, Typing out routingConfig, let's ts point to the exact thing going wrong
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);
