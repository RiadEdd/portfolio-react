import React, { Component } from 'react';
import { SocialItems } from './MenuItems';
import './Social.css'

class Social extends Component{

    render(){
        return(
            <div className="socialDiv">
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