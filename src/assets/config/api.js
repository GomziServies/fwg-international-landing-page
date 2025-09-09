import axios from 'axios';
import apiConfig from './apiConfig';
import Swal from 'sweetalert2';

const USER_ROUTE = '/user/v1';
const PUBLIC_ROUTE = '/public/v1';
const BASE_URL = apiConfig.BASE_URL + USER_ROUTE;
const PUBLIC_URL = apiConfig.BASE_URL + PUBLIC_ROUTE;

// User API Instance
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authorization = localStorage.getItem('fg_group_user_authorization');
        if (authorization) {
            config.headers['authorization'] = authorization;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Public API Instance
export const publicAxiosInstance = axios.create({
    baseURL: PUBLIC_URL,
});

publicAxiosInstance.interceptors.request.use(
    (config) => {
        const authorization = localStorage.getItem('fg_group_user_authorization');
        if (authorization) {
            config.headers['authorization'] = authorization;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('fg_group_user_authorization')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // localStorage.removeItem('fg_group_user_authorization');
            localStorage.removeItem('user_info');
        }
        return Promise.reject(error);
    }
);
