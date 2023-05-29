const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const tipsRoute = require("./tipsRoute");
const profileRoute = require("./profileRoute");
const helpRoute = require("./helpRoute");
const donorRoute = require("./donorRoute");
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
  {
    path: "/api/helps",
    handler: helpRoute,
  },
  {
    path: "/api/donors",
    handler: donorRoute,
  },
];

module.exports = (app) => {
  routers.forEach((router) => {
    app.use(router.path, router.handler);
  });
};
