import React from 'react'
import { useState, useEffect } from 'react'
import Home from './Home'
import NotFoundPage from "../pages/NotFoundPage"

const GetData = () => {

    const [data,setData] = useState(null)

    useEffect(() => {
        fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
            .then((res) => res.json())
            .then(setData)
    }, [])

    if(data){
        return(
            <>
                <Home data={data}/>
            </>
        );
    }

    return <NotFoundPage/>
}

export default GetData
