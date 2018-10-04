const { parse, validate, execute } = require('graphql');
const schema = require('../lib');

// const queryString = `
// {
//   contributor(adsId: "a543v") {
//     name
//     username
//     email
//     totalCommits
//   }
// }`;

// const queryString = `
// {
//   person(email: "shane.unger1@gmail.com") {
//     firstName
//     lastName
//   }
// }`;

// const queryString = `
// {
//   repository(name: "connect-the-dots") {
//     name
//     director {
//       name
//     }
//     language
//     totalCommits
//     license
//     contributors {
//       name
//     }
//   }
// }`;
const queryString = `
{
  repository(name: "connect-the-dots") {
    name
    language
    license
    director
  }
}`;

const queryAST = parse(queryString);

// Validate the query against the schema
const errors = validate(schema, queryAST);
if (errors.length === 0) {
  console.log(`Validation successful`); // eslint-disable-line no-console
} else {
  console.log(`Errors: ${JSON.stringify(errors)}`); // eslint-disable-line no-console
}

(async () => {
  try {
    // Execute the query against the schema
    const result = await execute(
      schema,
      queryAST,
      {},
      {
        user: { email: 'shane.unger1@email.com' },
      }
    );
    console.log(`Execution result: \n${JSON.stringify(result, null, 2)}`); // eslint-disable-line no-console
  } catch (err) {
    console.log(JSON.stringify(err)); // eslint-disable-line no-console
  }
})();
