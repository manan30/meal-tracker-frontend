// dev env
const PROTOCOL = 'http';
const URL = 'localhost:1741';

const PASSWORD_REQUIREMENTS = [
  ['Uppercase character', false],
  ['Lowercase character', false],
  ['Number', false],
  ['Special characters', false],
  ['8 characters long', false]
];

export { PROTOCOL, URL, PASSWORD_REQUIREMENTS };
