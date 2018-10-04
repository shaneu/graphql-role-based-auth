const { contributors } = require('../../__mocks__/data');

class Contributors {
  static async findById(id) {
    return contributors.find(({ adsId }) => adsId === id);
  }
}

module.exports = Contributors;
