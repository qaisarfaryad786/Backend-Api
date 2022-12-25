const userModel = require("../models/users");
const Register = require("../models/users");
const jwt = require("jsonwebtoken");
const jwtKey = "ACTIVITY";

const signup = async (req, res) => {
  const register = new Register(req.body);
  const result = await register.save();
  // console.log(result);
  jwt.sign({ result }, jwtKey, { expiresIn: "1hr" }, (err, token) => {
    if (err) {
      res.send({ result: "something went wrong" });
    }
    res.send({ result, auth: token });
  });
};

const login = async (req, res) => {
  // res.send(req.body);
  const user = await Register.findOne(req.body).select("-password");
  if (user) {
    jwt.sign({ user }, jwtKey, { expiresIn: "1hr" }, (err, token) => {
      if (err) {
        res.send({ result: "something went wrong" });
      }
      res.send({ user, auth: token });
    });
  } else {
    res.send("user not found");
  }
};

module.exports = { signup, login };
