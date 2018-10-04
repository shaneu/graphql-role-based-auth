const { repositories } = require('../../__mocks__/data');

class Contributors {
  static async findByName(searchName) {
    return repositories.find(({ name }) => name === searchName);
  }
}

module.exports = Contributors;
