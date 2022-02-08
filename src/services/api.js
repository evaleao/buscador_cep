import Axios from "axios";

//https://viacep.com.br/ws/38400100/json/

const api = Axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;

