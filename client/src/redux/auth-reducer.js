import { usersAPI } from "../api/axios";
import { toast } from 'react-toastify';

const SET_USER_DATA = 'SET_USER_DATA'
const LOGOUT = 'LOGOUT'
const UPDATE_ONE = 'UPDATE_ONE'
const UPDATE_TWO = 'UPDATE_TWO'



const initialState = {
    user: null,
    isAuth: false,
    token: null,
    status: null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.user,
                token: action.token,
                isAuth: true,
                status: action.status,
            }
        case UPDATE_ONE:
            return {
                ...state,
                user: action.user,
            }
        case UPDATE_TWO:
            return {
                ...state,
                user: action.user,
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null,
            }
        default:
            return state
    }
}


export const setAuthUserData = (user, token, status) => {
    return {
        type: SET_USER_DATA,
        user,
        token,
        status,
    }
}

export const updateOneUserData = (user) => {
    return {
        type: UPDATE_ONE,
        user,
    }
}
export const updateTwoUserData = (user) => {
    return {
        type: UPDATE_TWO,
        user,
    }
}


export const registerUser = (user) => async (dispatch) => {
    try {
        let { data } = await usersAPI.register(user)
        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        dispatch(setAuthUserData(data?.user, data?.token, data?.message))

    } catch (error) {
        console.log(error)
    }
}

export const updateOne = (user) => async (dispatch) => {
    try {
        let { data } = await usersAPI.updateOne(user)
        dispatch(updateOneUserData(data?.user))

    } catch (error) {
        console.log(error)
    }
}
export const updateTwo = (user) => async (dispatch) => {
    try {
        let { data } = await usersAPI.updateTwo(user)
        dispatch(updateTwoUserData(data?.user))

    } catch (error) {
        console.log(error)
    }
}



export const loginUser = (login, password) => async (dispatch) => {
    try {
        let { data } = await usersAPI.login(login, password)
        const status = data?.message
        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        dispatch(setAuthUserData(data?.user, data?.token, data?.message))
        if (status === 'Вы вошли в систему!') {
            window.location.reload();
        }
        toast(status)
    } catch (error) {
        console.log(error)
    }
}



export const getMe = () => async (dispatch) => {
    try {
        let { data } = await usersAPI.getMe()
        dispatch(setAuthUserData(data?.user))
    } catch (error) {
        console.log(error)
    }
}


export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const checkIsAuth = (localStorage) => Boolean(localStorage)




export default authReducer;