import axios from 'axios';
const localhost = 'http://localhost:3024/'

export function getAll() {
    const url = 'api/quizzes/';
    return axios.get(localhost + url);
}