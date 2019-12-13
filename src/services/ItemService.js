import axios from 'axios'

const BACKEND_ENDPOINT = 'http://172.17.0.1:8111';

class ItemService {
    async getAllItems() {
        const url = `${BACKEND_ENDPOINT}/item`;
        return axios.get(url).then(res => {
            console.log(res.data);
            return res.data;
        }).catch(err => {
            console.log(err);
            return undefined;
        });
    }

    async deleteItem(id) {
        const url = `${BACKEND_ENDPOINT}/item/` + id;
        return axios.delete(url).then(res => {
            console.log(res.data);
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });
    }

    async decreaseItem(id) {
        const url = `${BACKEND_ENDPOINT}/item/` + id;
        return axios.post(url).then(res => {
            console.log(res.data);
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });
    }

    async addItem(item) {
        const url = `${BACKEND_ENDPOINT}/item`;
        return axios.put(url, item).then(res => {
            console.log(res.data);
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });
    }
}

export default new ItemService();