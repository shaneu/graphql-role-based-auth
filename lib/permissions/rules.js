const { rule } = require('graphql-shield');
const { User } = require('../models');

const isAdmin = rule('isAdmin')(async (root, args, ctx) => {
  const {
    user: { email },
  } = ctx;
  const userRoles = await User.getRoles(email);
  return userRoles.includes('admin');
});

const isContributor = rule('isContributor')(async (root, args, ctx) => {
  const {
    user: { email },
  } = ctx;
  const userRoles = await User.getRoles(email);
  return userRoles.includes('contributor');
});

module.exports = { isAdmin, isContributor };
