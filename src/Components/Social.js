import React, { Component } from 'react';
import { SocialItems } from './MenuItems';
import './Social.css'
import Aos from "aos";
import "aos/dist/aos.css";


class Social extends Component{

    constructor(props){
        super(props);
        Aos.init();
    }

    componentWillReceiveProps (){ 
        Aos.refresh(); 
    } 

    render(){
        return(
            <div className="socialDiv" data-aos="fade-up" data-aos-duration="1000">
                <ul className="socialList">
                    {SocialItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <a href={item.url}>
                                    <i className={item.cName}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                    <div className="verticalBar"></div>
            </div>
        )
    }

}

export default Social