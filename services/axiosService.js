// var getToken = function () {
//     return localStorage.getItem('token')
// }

var baseUrl = 'http://127.0.0.1:8000/'

import axios from "axios";
import toolsService from './toolsService'

export default {
    post(url,params){
        var config = toolsService.getHeader();
        return axios.post(baseUrl+url, params, config)
    },
    get(url){
        var config = toolsService.getHeader();
        return axios.get(baseUrl+url, config)
    }
}