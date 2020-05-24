var express = require('express');
var router = express.Router();
const userController = require("../controller/user");

router.get('/', function (req, res) {
  return userController.getAllUsers(req, res);
});

router.post('/', function (req, res, next) {
  return userController.createUser(req, res);
});
module.exports = router;
