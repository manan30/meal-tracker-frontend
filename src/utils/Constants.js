// dev env
const PROTOCOL = 'http';
const URL = `${
  process.env.NODE_ENV !== 'development'
    ? 'sculptor.mananjoshi.me:1741'
    : 'localhost:2130'
}`;

const PASSWORD_REQUIREMENTS = [
  ['Uppercase character', false],
  ['Lowercase character', false],
  ['Number', false],
  ['Special characters', false],
  ['8 characters long', false]
];

export { PROTOCOL, URL, PASSWORD_REQUIREMENTS };
