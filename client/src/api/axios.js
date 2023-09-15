import axios from 'axios'


export const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export const usersAPI = {
    register(user) {
        return instance.post('/auth/registration', { user })
    },
    login(login, password) {
        return instance.post('/auth/login', { login, password })
    },
    getMe() {
        return instance.get('/auth/me')
    },
    updateOne(user) {
        console.log(user)
        return instance.put('/auth/registration/stage2', { user })
    },
    updateTwo(user) {
        console.log(user)
        return instance.put('/auth/registration/stage3', { user })
    }
}