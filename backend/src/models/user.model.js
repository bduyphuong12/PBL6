const db = require("../common/connect");
const User = function (user) {
  this.Id = user.Id;
  this.UserName = user.UserName;
  this.Password = user.Password;
  this.Email = user.Email;
};

User.Register = (data, result) => {
  db.query("select * from user where Email = ?", data.email, (err, user) => {
    if (user.length == 0) {
      db.query(
        "INSERT INTO user (UserName,PassWord,Email) VALUES (?,?,?);",
        [data.username, data.password, data.email],
        function (err, user) {
          if (err) {
            result(403, "Registration failed");
          } else {
            result(200, "Registration successfuly");
          }
        }
      );
    } else {
      result(400, "Email have already!");
    }
  });
};

User.Login = (email, password, result) => {
  console.log("loni", email);
  db.query("Select * from user where Email = ?", email, (err, user) => {
    console.log(password);
    console.log("user nek", user);
    if (err || user.length == 0) {
      result(400, "Wrong email!");
    } else {
        if (user[0].PassWord == password) {
          const infoUser = {id: user[0].Id,username : user[0].UserName, email: user[0].Email}
          result(200, infoUser);
        } else {
          result(400, "Wrong password!");
        }
      }
    })
  }

User.get_all = function (result) {
  db.query("select * from user", function (err, user) {
    if (err) {
      result(err);
    } else {
      result(user);
    }
  });
};

User.UpdateUser = (id, username, result) => {
  console.log('id and username', id, username)
  db.query(
    "update user set UserName = ? where Id = ?",
    [username, id],
    (err, user) => {
      if (err) {
        return result(400, "Error when update user!");
      } else {
        db.query("select * from user where Id = ?", id, (err, user) => {
          if (err) {
            console.log(err);
          } else {
            return result(200, ...user);
          }
        });
      }
    }
  );
};
User.UpdatePassWord = async (id, oldpass, password, result) => {
  console.log(id, password);
  db.query("select * from user where Id = ?", id, (err, user) => {
    if (err) {
      return result(400, "Error when update Password!");
    } else {
        if (oldpass == user[0].PassWord) {
          db.query(
            "update user set PassWord = ? where Id = ?",
            [password, id],
            (err, user) => {
              if (err) {
                return result(400, "Error when update Password!");
              } else {
                return result(200, "Update Password Success!");
              }
            }
          );
        } else {
          return result(400, "wrong old password!");
        }
    }
  });
};
///cua nghia
User.GetListUser = function (result) {
  db.query("select * from user", function (err, user) {
    if (err) {
      result(err);
    } else {
      result(user);
    }
  });
};

User.GetUserDetail = function (id, result) {
  db.query("select * from user where Id = ?", id, function (err, user) {
    if (err || user.length == 0) {
      result(err);
    } else {
      const resp = {id : user[0].Id, username: user[0].UserName, email: user[0].Email}
      result(resp);
    }
  });
};


User.DeleteUser = function (id, result) {
  db.query("delete from user where Id = ?", id, function (err, user) {
    if (err) {
      result('Delete failed!');
    } else {
      result('Delete success!');
    }
  });
};

module.exports = User;
