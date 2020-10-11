const { default: Axios } = require("axios")
const API_URL = process.env.REACT_APP_API_URL;
export const signup = (payload) => {
    return Axios.post(API_URL+"signup", payload)
    .then(res=> {
        localStorage.setItem('token', res.data.token)
        return res

    })
}

export const login = (payload) => {
    return Axios.post(API_URL+"login", payload)
    .then(res=> {
        localStorage.setItem('token', res.data.token)
        return res
    })
}

export const userData = () => {
    return Axios.post(API_URL+'me' , {
        headers: {
            "Authorization" : localStorage.getItem('token')
        }
    })
}