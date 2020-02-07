import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const getRecipes = () => axios.get(`${PROTOCOL}://${URL}/recipes`);

export { getRecipes };
