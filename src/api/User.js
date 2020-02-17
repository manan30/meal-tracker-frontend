import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const getRecipes = () => axios.get(`${PROTOCOL}://${URL}/recipes`);

const getCategories = () => axios.get(`${PROTOCOL}://${URL}/categories`);

const createUser = data => axios.post(`${PROTOCOL}://${URL}/user/create`, data);

export { createUser, getRecipes, getCategories };
