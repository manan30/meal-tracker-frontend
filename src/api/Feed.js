import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const getInitialFeed = () => axios.get(`${PROTOCOL}://${URL}/feedRecipes`);

export { getInitialFeed };
