// dev env
const PROTOCOL = 'http';
const URL = 'localhost:1741';

const PASSWORD_REQUIREMENTS = [
  { uc: ['Uppercase character', false] },
  { lc: ['Lowercase character', false] },
  { sc: ['Special characters', false] },
  { l: ['8 characters long', false] }
];

export { PROTOCOL, URL, PASSWORD_REQUIREMENTS };
