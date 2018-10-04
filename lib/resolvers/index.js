const models = require('../models');

const resolvers = {
  Query: {
    contributor(_, { adsId }) {
      return models.Contributor.findById(adsId);
    },
    person(_, { email }) {
      return models.User.findByEmail(email);
    },
    repository(_, { name }) {
      return models.Repository.findByName(name);
    },
  },
};

module.exports = resolvers;
