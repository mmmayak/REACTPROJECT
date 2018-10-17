import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-black-burger.firebaseio.com/'
});

export default instance;