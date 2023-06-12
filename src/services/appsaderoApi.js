import {appsaderoApi} from "./api"

export const login = async (user) => {
    console.log(user)
    const {data} = await appsaderoApi.post('/auth/login', user)
    console.log(data)
}

