import axios from 'axios';

export const imagesApi = {
    getImage() {
        return axios.get(`https://breakingbadapi.com/api/character/random`).then(res => res.data)
    }
}