import axios from 'axios'

const BACKEND_ENDPOINT = 'http://172.17.0.1:8111';

class RegistrationService {
    async registration(username, password) {
        const url = `${BACKEND_ENDPOINT}/user`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        return axios.put(url, {
            login: username,
            password: password
        }).then(res => {
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });
    }
}

export default new RegistrationService();