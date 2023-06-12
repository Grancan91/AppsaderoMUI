import axios from "axios";

export const advice = axios.create({
    baseURL: 'https://api.adviceslip.com/advice',
    timeout: 3000
})

export const photo = axios.create({
    baseURL: 'https://picsum.photos/200/300',
    timeout: 3000
})

export const appsaderoApi = axios.create({
    baseURL: 'https://localhost/api',
    timeout: 3000
})
