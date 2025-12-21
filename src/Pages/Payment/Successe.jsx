import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import UseAxios from '../../hooks/UseAxios';

const Successe = () => {
    const [ searchParams ]=useSearchParams()
    const sessionId = searchParams.get('session_id')
    const axionsInstance = UseAxios()
    useEffect(()=>{
        axionsInstance.post(`/payment-success?session_id=${sessionId}`)
        .then(res=>{
            console.log(res.data)
        })
    },[axionsInstance,sessionId])
    return (
        <div>
            succese
        </div>
    );
};

export default Successe;