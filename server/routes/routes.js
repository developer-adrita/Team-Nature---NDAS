const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const tipsRoute = require("./tipsRoute");
const profileRoute = require("./profileRoute");

// const topicContentRoute = require("./topicContentRoute");

const routers = [
  {
    path: "/",
    handler: homeRoute,
  },
  {
    path: "/api/user",
    handler: userRoute,
  },
  {
    path: "/api/profile",
    handler: profileRoute,
  },
  {
    path: "/api/tips",
    handler: tipsRoute,
  },
];

module.exports = (app) => {
	routers.forEach((router) => {
		app.use(router.path, router.handler);
	});
};
