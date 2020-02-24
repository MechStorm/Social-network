import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5c2dd3a5-5fa3-46ca-91f7-09ebb2455642"
    }
});

export const userAPI = {
    getUsers(pageNumber = 1, pageSize = 5){
       return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => response.data);
    },
    getProfile(id){
        return instance.get(`profile/${id}`)
        .then(response => response.data);
    },
    follow(id){
        return instance.post(`follow/${id}`, {})
        .then(response => response.data);
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
        .then(response => response.data);
    }
}

export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
        .then(response => response.data);
    }
}