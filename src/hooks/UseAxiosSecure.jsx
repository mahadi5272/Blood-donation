import axios from 'axios';
 import UseAuth from './UseAuth';
import { useEffect } from 'react';

const axiosSecure = axios.create({baseURL:'http://localhost:3000'})

const UseAxiosSecure = () => {
    const {user} = UseAuth();

    useEffect(()=>{
        const reqInterceptor = axiosSecure.interceptors.request.use((config)=>{
            config.headers.Authorization = `Bearer ${user?.accessToken}`;
            return config;
        })
        const resInterceptor = axiosSecure.interceptors.response.use((response)=>{
            return response;
        },(error)=>{
            console.log(error)
            return Promise.reject(error);
        }
    )
    return ()=>{
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
    }
    },[user])

    return axiosSecure
}


export default UseAxiosSecure;