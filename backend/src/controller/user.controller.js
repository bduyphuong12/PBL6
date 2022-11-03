const User = require("../models/user.model");
require("dotenv").config();

exports.Register = async (req, res) => {
  try {
    if (req.body.password != req.body.confpassword) {
      return res
        .status(400)
        .json({ msg: "Password and ConfirmPassWord not match" });
    }


    User.Register(req.body, (sta, msg) => {
      return res.status(sta).json({ msg });
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.Login =  (req, res) => {
  try {
    User.Login(
      req.body.email,
      req.body.password,
      (sta,user) => {
        if (sta == 400) {
          return res.status(400).json({ msg: user });
        } else {
          return res.status(sta).json({ ...user});
        }
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.GetListUser = (req, res) => {
  User.GetListUser((data) => {
    res.send({ result: data });
  });
};

exports.UpdateUser = async (req, res) => {
  const data = req.body;
  User.UpdateUser(data.id, data.username, (sta, user) => {
    user.PassWord = "";
    res.status(sta).json({ user });
  });
};

exports.UpdatePassWord = async (req, res) => {
  const data = req.body;
  User.UpdatePassWord(data.id, data.oldpass, data.password, (sta, resp) => {
    res.status(sta).json(resp);
  });
};

exports.UserDetail = function (req, res) {
  User.GetUserDetail(req.params.id, function (response) {
    res.send({  ...response });
  });
};


exports.DeleteUser = function (req, res) {
  User.DeleteUser(req.body.id, function (response) {
    res.send({  response });
  });
};

