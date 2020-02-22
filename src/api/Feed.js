import axios from 'axios';
import { PROTOCOL, URL } from '../utils/Constants';

const getInitialFeed = () => axios.get(`${PROTOCOL}://${URL}/feed`);

export { getInitialFeed };
