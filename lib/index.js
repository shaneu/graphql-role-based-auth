const path = require('path');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');
const { shield, or, allow } = require('graphql-shield');
const { isAdmin, isContributor } = require('./permissions/rules');
const { applyMiddleware } = require('graphql-middleware');

const typeDefs = importSchema(
  path.resolve(__dirname, './schema/schema.graphql')
);

const exeSchema = makeExecutableSchema({ typeDefs, resolvers });

const permissions = shield({
  Query: {
    contributor: or(isAdmin, isContributor),
    person: isAdmin,
    repository: allow,
  },
  Repository: {
    name: allow,
    language: allow,
    license: allow,
    director: isAdmin,
    totalCommits: isAdmin,
    contributors: isAdmin,
  },
});

const schema = applyMiddleware(exeSchema, permissions);

module.exports = schema;
