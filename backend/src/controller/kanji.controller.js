
const Model = require("./helper/helper");

exports.predict =  (req, res) => {
    try {
        let img = req.body;
        let data = Model.predict(img);
        return res.status(sta).json({"a" :"100"});
    } catch (err) {
      return res.status(400).json(err);
    }
  };
exports.test =  (req, res) => {
    console.log("Request is Incoming");
    try {
        return res.status(sta).json({"a" :"100"});
    } catch (err) {
      return res.status(400).json(err);
    }
  };
var users = [
	{id: 1, name: "User1", email: "user1@gmail.com", age: 31}, 
	{id: 2, name: "User2", email: "user2@gmail.com", age: 20},
	{id: 3, name: "User1", email: "user1.2@gmail.com", age: 25}
];

module.exports = {
    test1:  function(req, res){
                res.render('/test',{
                    users: users
                });
            }
};