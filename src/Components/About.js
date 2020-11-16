import React, { Component } from 'react';
import './About.css';
import { TechItems } from './MenuItems';

class About extends Component{   
    render(){
        return(
            <div className="aboutDiv">
                <div className="divHeadText">
                    <div className="headText"><h2 id="About">About me</h2><hr></hr></div>
                </div>
                <div className="aboutText">
                    <p className="textDescription">Hi ! I'm Riad, a Computer Science student at INSA Lyon.</p>
                    <p className="textDescription">I study data structures, web and software development, networks, project management, and much more.</p>
                    <p className="textDescription">I do some projects on my free time, and this website is one of them. I'll use it to showcase some of my work</p>
                    <p className="textDescription">I also enjoy graphic design, if you're curious, you can always check out my Behance page !</p>
                    <p className="textDescription">Here are a few technologies I've worked with :</p>
                </div>
                <ul className="techList" data-aos="fade-up" data-aos-duration="1000">
                    {TechItems.map((item,index) => {
                        return(
                            <li key={index}><i className={item.cName}></i></li>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }
}

export default About