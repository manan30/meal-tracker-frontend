// dev env
const PROTOCOL = 'http';
const URL = `${
  process.env.NODE_ENV !== 'development'
    ? 'sculptor.mananjoshi.me'
    : 'localhost'
}:1741`;

export { PROTOCOL, URL };
