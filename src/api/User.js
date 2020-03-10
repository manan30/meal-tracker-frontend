import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const URL_PREFIX = `${PROTOCOL}://${URL}`;

const getRecipes = () => axios.get(`${URL_PREFIX}/recipes`);

const getCategories = () => axios.get(`${URL_PREFIX}/categories`);

const createUser = data => axios.post(`${URL_PREFIX}/user/create`, data);

const loginUser = data => axios.post(`${URL_PREFIX}/user/login`, data);

export { createUser, getRecipes, getCategories, loginUser };
