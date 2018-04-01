import axios from 'axios';

export function getAll(){
    const url = 'api/users';

    return axios.get(url);
}

export function speech() {
    return axios({
        method: 'post',
        url: '',
        headers: {

        }
    })
}