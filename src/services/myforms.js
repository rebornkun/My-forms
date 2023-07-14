import axios from "axios";


const baseUrl = "http://localhost:5000/api/v1/myforms"

class myFormsDataService {
    authGoogleUser(token){
        return axios.get(`${baseUrl}/googleapi/${token}`);
    }

    registerUser(data){
        return axios.post(`${baseUrl}/register`, data);
    }

    // loginUser(data){
    //     return axios.post(`${baseUrl}/login`, data);
    // }

    // get(id){
    //     return axios.get(`${baseUrl}/user/${id}`)
    // }

    // addTopic(data) {
    //     return axios.post(`${baseUrl}/topic`, data);
    // }

    // updateTopic(data) {
    //     return axios.put(`${baseUrl}/topic`, data);
    // }

    // deleteTopic(id, data) {
    //     return axios.delete(`${baseUrl}/topic?id=${id}`, data);
    // }

}

export default new myFormsDataService();