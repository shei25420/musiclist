const User = require('../models/user');

class ApiController {
  async getAllUsers(req, res, next) {
    try {
      const user = await User.find({});

      res.status(200).json(user);
    } catch (e) {
      res.status(401).json(e);
    }
  }
}

module.exports = new ApiController();
