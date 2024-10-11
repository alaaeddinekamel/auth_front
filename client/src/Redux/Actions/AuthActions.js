import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErreurActions"

export const register=(cordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/signUp', cordUser)
        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )
        navigate('/Profil')
    } catch (error) {
      dispatch(
        {
            type : FAIL,
            payload : error.response.data.errors
        }
      ) 
      error.response.data.errors.forEach(element => {
        dispatch(handleError(element.msg))
    }); 
    }
}

export const login =(cordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/signIn', cordUser)
        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )
        navigate('/Profil')
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}

export const logout=()=>{
    return ({
        type : LOGOUT
    })
    
}

export const current=()=>async(dispatch)=>{
    try {
        const config = {
            headers : {
                Authorized : localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/auth/CurrentUser', config)
        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}