import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "1a457df1-8370-4532-b61e-5471af10298d"
    }
});

export const userAPI = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

export const profileApi = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    },
    getProfileStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data);
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data);
    },
    saveUserPhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    userLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    userLogout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}