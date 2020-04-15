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
  ['8 characters long', false],
];

const CREATE_RECIPE_ITEMS = [
  { header: 'Gallery', desc: 'Upload Images' },
  { header: 'Ingredients', desc: 'Add Ingredients' },
  { header: 'How To Cook', desc: 'Add Instructions' },
  { header: 'Nutritional Information', desc: 'Add Nutritional Info' },
];

export { PROTOCOL, URL, PASSWORD_REQUIREMENTS, CREATE_RECIPE_ITEMS };
