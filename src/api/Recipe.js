import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const getRecipe = (id) => axios.get(`${PROTOCOL}://${URL}/recipe/${id}`);
// const getRecipe = () => axios.get(`${PROTOCOL}://${URL}/recipe`);

export { getRecipe };
