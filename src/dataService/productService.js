import axios from "axios";
axios.defaults.headers.common = { 'Authorization': localStorage.getItem('token') }

const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = () => {
    return axios.get(API_URL + 'products');
}
export const getProductById = (id) => {
    return axios.get(API_URL + 'products/' + id);
}

export const updateProduct = (id, payload) => {
    return axios.patch(API_URL + 'products/' + id, payload);
}

export const postProduct = (payload) => {
    return axios.post(API_URL + 'products/create', payload);
}