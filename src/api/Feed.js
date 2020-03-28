import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const FEED_URL = `${PROTOCOL}://${URL}/feed`;

const getInitialFeed = () => axios.get(FEED_URL);

const getFeedRecipes = page =>
  axios.get(`${FEED_URL}/recipes?page=${page}&limit=10`);

export { getInitialFeed, getFeedRecipes };
