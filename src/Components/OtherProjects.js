import React, { Component } from 'react';
import { ProjectsItems } from './MenuItems';
import './OtherProjects.css';

class OtherProjects extends Component{   
    render(){
        return(
            <>
            <div className="wrapper">
                <div className="wrapperProjects">
                    <div className="gridProjects">
                        {ProjectsItems.map((item,index) => {
                            return(
                                <div className="cardProject" data-aos="fade-up" data-aos-duration="700">
                                    <h3 className="projectsTitle">{item.projectName}</h3>
                                    <p className="projectsTech">{item.techUsed}</p>
                                    <p className="projectsDescription">{item.projectDescription}</p>
                                    <div className="divLinks"><span className="projectsLinks"><i className="fab fa-github"></i><i className="fab fa-github"></i></span></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default OtherProjects