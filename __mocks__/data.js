// type Contributor {
//   employeeId: String!
//   name: String!
//   username: String!
//   email: String!
//   adsId: String!
//   totalCommits: Int!
//   image: String
// }

const contributors = [
  {
    employeeId: 54321,
    name: 'Shane Unger',
    username: 'shaneunger',
    email: 'shane.unger1@email.com',
    adsId: 'a543v',
    totalCommits: 14,
  },
  {
    employeeId: 12345,
    name: 'Dilip Kumar',
    username: 'dilip.kumar4',
    email: 'dilip.kumar@email.com',
    adsId: '12b4c',
    totalCommits: 30,
  },
  {
    employeeId: 19876,
    name: 'Pratik Kasat',
    username: 'pkasat',
    email: 'pratik.kasat@email.com',
    adsId: 'y76d2',
    totalCommits: 28,
  },
];

// type Person {
//   email: String!
//   firstName: String!
//   lastName: String!
//   name: String!
// }
const users = [
  {
    email: 'shane.unger1@email.com',
    firstName: 'Shane',
    LastName: 'Unger',
    name: 'Shane Unger',
    roles: ['contributor'],
  },
  {
    email: 'dilip.kumar@email.com',
    firstName: 'Dilip',
    LastName: 'K',
    name: 'dilip.k',
    roles: ['admin'],
  },
  {
    email: 'pratik.k@email.com',
    firstName: 'Pratik',
    LastName: 'K',
    name: 'pka',
    roles: ['contributor'],
  },
];

// type Repository {
//   name: String!
//   director: Director
//   language: String!
//   license: String
//   totalCommits: Int!
//   contributors: [Contributor]
// }

const repositories = [
  {
    name: 'connect-the-dots',
    director: 'Asish',
    language: 'haskell',
    licence: 'Apache-2.0',
    totalCommits: 4000,
    contributors: [
      {
        email: 'pratik.k@email.com',
        firstName: 'Pratik',
        LastName: 'K',
        name: 'pk',
        roles: ['contributor'],
      },
      {
        email: 'shane.unger1@email.com',
        firstName: 'Shane',
        LastName: 'Unger',
        name: 'Shane Unger',
        roles: ['contributor'],
      },
    ],
  },
  {
    name: 'stop-latebird',
    director: 'Asish',
    language: 'lisp',
    licence: 'Apache-2.0',
    totalCommits: 78,
    contributors: [
      {
        email: 'pratik.k@email.com',
        firstName: 'Pratik',
        LastName: 'K',
        name: 'pk',
        roles: ['contributor'],
      },
      {
        email: 'dilip.k@email.com',
        firstName: 'Dilip',
        LastName: 'K',
        name: 'dilip.k',
        roles: ['admin'],
      },
    ],
  },
];

module.exports = {
  contributors,
  users,
  repositories,
};
