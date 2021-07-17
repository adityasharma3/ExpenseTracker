import React from 'react'
import { FooterStyling } from './FooterStyles'

const Footer = (props) => {
    console.log(props);
    return (
        <FooterStyling>
            <h1>Your expenses total upto </h1>
            <h2>₹{props.displayExpenses}</h2>
            {/* console.log(props); */}
        </FooterStyling>
    )
}

export default Footer;
