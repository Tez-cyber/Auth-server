const User = require('../models/user');

exports.signUp = (req, res) => {
    const user = new User(req.body)
    user.save()
}