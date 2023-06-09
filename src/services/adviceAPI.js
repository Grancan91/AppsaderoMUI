import { advice } from "./api";

export async function getRandom(){
    const  {data}  = await advice.get()
    console.log(data)
}

