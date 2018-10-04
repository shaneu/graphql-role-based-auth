const { users } = require('../../__mocks__/data');

class User {
  static async getRoles(usersEmail) {
    return users.find(({ email }) => email === usersEmail).roles;
  }
  static async findByEmail(searchEmail) {
    return users.find(({ email }) => email === searchEmail);
  }
}

module.exports = User;
