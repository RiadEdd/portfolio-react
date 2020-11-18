import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{   
    render(){
        return(
            <>
            <div className="divTitle">
                <div className="titleText"><hr></hr><h2 className="test" id="Contact">Contact me</h2></div>
            </div>
            <div className="contactDiv">
                <p className="contactText" align="center">I'm currently looking for a 4 months internship starting May 2021. If you have an interesting offer, or you want to get in contact for anything else, feel free to contact me ! </p>
                <a href="mailto:eddahabi.riad@gmail.com" className="contactMail">eddahabi.riad@gmail.com</a>
            </div>
            </>
        )
    }
}

export default Contact