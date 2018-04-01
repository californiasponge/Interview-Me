import axios from 'axios';

const localhost = 'http://localhost:3024/'

export function getSubject(subject) {
    const url = localhost + 'api/' + subject + '/quizzes';
    return axios.get(url);
}