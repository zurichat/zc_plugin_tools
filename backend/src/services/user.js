// This is only a sample file of how to setup a db service
const User = require("../models/user");

class UserService {
  create(user) {
    return User.create(user);
  }

  findByEmail(email) {
    return User.findOne({ email });
  }

  update(id, updateQuery) {
    return User.findByIdAndUpdate(id, updateQuery);
  }
}

module.exports = new UserService();
