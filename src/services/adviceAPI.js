import { api } from "./api";

export async function getRandom(){
    const  {data}  = await api.get()
    console.log(data)
}

