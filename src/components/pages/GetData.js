import React from 'react'
import { useState, useEffect } from 'react'
import Graphs from './Graphs'
import Home from './Home'

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

    return <h1> No Items</h1>
}

export default GetData
