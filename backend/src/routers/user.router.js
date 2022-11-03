module.exports = function (router) {
  const userController = require("../controller/user.controller");

  router.post("/user/register", userController.Register);
  router.post("/user/login", userController.Login);
  router.put("/user/update", userController.UpdateUser);
  router.get("/user/list", userController.GetListUser);
  router.get("/user/detail/:id", userController.UserDetail);
  router.put("/user/updatepassword", userController.UpdatePassWord);
  router.delete("/user/delete", userController.DeleteUser);

};
