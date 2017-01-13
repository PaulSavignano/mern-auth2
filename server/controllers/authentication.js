const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password.' });
  }

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next();
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use.' })
    }
    const user = new User({
      email, password
    });
    user.save((err) => {
      if (err) { return next(err); }
      res.json({ message: 'User saved!'});
    });
  });


}
