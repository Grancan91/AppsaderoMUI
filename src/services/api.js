import axios from "axios";

export const api = axios.create({
    baseURL: 'https://picsum.photos/200/300',
    timeout: 3000
})