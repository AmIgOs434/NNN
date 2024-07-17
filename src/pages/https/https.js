import {$host} from "./index";


export const postSms = async (device) => {
    const data1 = await $host.post('api/user/postMessage23', device)
    return data1
}