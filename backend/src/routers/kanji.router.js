module.exports = function (router) {
    const userController = require("../controller/kanji.controller");
    router.get("/user/detail/:id", userController.UserDetail);
  };