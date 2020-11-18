import React, { Component } from 'react';
import './RandomProject.css'
import { ProjectsItems } from './MenuItems';

class RandomProject extends Component{

    render(){
        const indexProject = Math.floor(Math.random()*(ProjectsItems.length))
        return(
            <>
            <div className="divHeadText">
                    <div className="headText"><h2 id="Projects">Projects</h2><hr></hr></div>
            </div>
            <div className="wrapperProject">
                <div className="textWrapper">
                    <h4 className="projectType">{ProjectsItems[indexProject].projectType}</h4>
                    <h3 className="projectName">{ProjectsItems[indexProject].projectName}</h3>
                    <p className="projectDescription" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">{ProjectsItems[indexProject].projectDescription}</p>
                    <p className="techUsed">{ProjectsItems[indexProject].techUsed}</p>
                    <span><a href={ProjectsItems[indexProject].github} className="externalLinks"><i className="fab fa-github "></i></a><a className="externalLinks" href={ProjectsItems[0].production}><i className="fas fa-external-link-alt"></i></a></span>
                </div>
                <div className="imgWrapper" data-aos="fade-left" data-aos-duration="1500">
                    <img alt="project" src={ProjectsItems[indexProject].image} className="imgProject" />
                </div>
            </div>
            </>
        )
    }
}

export default RandomProject