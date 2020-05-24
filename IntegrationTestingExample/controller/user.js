const User = require('../model/user');

function getAllUsers(req, res) {
  User.find({}).then((data) => {
    if (data) {
      return res.json(data);
    } else {
      return res.json({});
    }
  }).catch((err) => res.sendStatus(500));
}

function createUser(req, res) {
  const email = req.body.email;
  User.findOne({ emailAddress: email }).then(user => {
    if (user) {
      return res.json({ email: 'User already exists' });
    } else {
      const newUser = new User({
        givenName: req.body.givenName,
        familyName: req.body.familyName,
        emailAddress: email
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => {
          console.error(err, "error");
          res.sendStatus(500)
        });
    }
  });
}

module.exports = {getAllUsers, createUser};