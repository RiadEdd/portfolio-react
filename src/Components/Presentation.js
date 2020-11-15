import React, { Component } from 'react';
import './Presentation.css';
import bustImage from '../img/head-image.png'; 

class Presentation extends Component{   
    render(){
        return(
            <div className="presentationDiv">
                <div className="divText">
                    <h5 className="hiText">Hi my name is</h5>
                    <h3 className="nameText">EDDAHABI Riad</h3>
                    <h5 className="jobText">I'm a Computer Science student.</h5>
                    <p className="descriptionText">I'm a 4th year INSA Lyon Computer Science student. I like to code, and I use this website to showcase some of my work.</p>
                    <button className="buttonContact">Contact me</button>
                </div>
                <div className="divImage" data-aos="fade-left" data-aos-delay="300">
                    <img src={bustImage} alt="bust" className="presentationImage" data-aos="fade-left"/>
                </div>
            </div>
        )
    }
}

export default Presentation