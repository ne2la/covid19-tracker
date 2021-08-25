import React from 'react'
import { SocialIcon } from 'react-social-icons'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <p> Copyright © Ne2la 2021</p>
                <ul>
                <li>
                <SocialIcon network="instagram" bgColor="white" style={{ height: 30, width: 30 }}
                url="https://www.instagram.com/_ne2la_/"/>
                </li>

                <li>
                <SocialIcon network="facebook" bgColor="white" style={{ height: 30, width: 30 }}
                url="https://www.facebook.com/profile.php?id=100007671948856"/>
                </li>

                <li>
                <SocialIcon network="linkedin" bgColor="white" style={{ height: 30, width: 30 }}
                url="https://www.linkedin.com/in/madushan-neelananda-79b5611a7/"/>
                </li>

                </ul>
            </div>
        </>
    )
}

export default Footer
