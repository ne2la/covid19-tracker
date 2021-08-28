import React from 'react'
import '../styles/Header.css'
import { RiVirusLine } from 'react-icons/ri';

const Header = () => {
    return (
        <div className="mainHeader">
            <h3 className='headerName'> 
                COVID-19 TRACKER <RiVirusLine style={{fontSize:'40px'}}/> 
            </h3>            
        </div>
    )
}

export default Header
