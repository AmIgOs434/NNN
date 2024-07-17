import axios from "axios";

const $host = axios.create({
    baseURL:'https://nso-construct.ru:8443/'
})



export {
    $host,
}