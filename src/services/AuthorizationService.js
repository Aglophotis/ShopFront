import axios from 'axios'

const BACKEND_ENDPOINT = 'http://172.17.0.1:8111';

class AuthorizationService {
    async authorization(username, password) {
        const url = `${BACKEND_ENDPOINT}/authorization`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        return axios.post(url, {
            login: username,
            password: password
        }).then(res => {
            axios.defaults.headers.common['Authorization'] = res.data;
            return !res.data.includes("Incorrect");
        }).catch(err => {
            console.log(err);
            return false;
        });
    }
}

export default new AuthorizationService();