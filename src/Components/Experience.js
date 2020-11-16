import React, { Component } from 'react';
import './Experience.css';
import { JobItems } from './MenuItems';

class Experience extends Component{
    state = { indexJob : 0}

    carouselClickRight = () => {
        const b = JobItems.length
        console.log(b)
        const a = this.state.indexJob
        if((this.state.indexJob + 1)>=JobItems.length){
            this.setState({indexJob : 0})
        }else{
            this.setState({indexJob : this.state.indexJob + 1 })
        }
        console.log({a})
    }

    carouselClickLeft = () => {
        const b = JobItems.length
        console.log(b)
        const a = this.state.indexJob
        if((this.state.indexJob - 1) === 0){
            this.setState({indexJob : JobItems.length - 1})
        }else{
            this.setState({indexJob : this.state.indexJob - 1 })
        }
        console.log({a})
    }


    render(){
        return(
            <>
            <div className="divTitle">
                <div className="titleText"><hr></hr><h2 className="test">Experience</h2></div>
            </div>
            <div className="cardsDiv">
                <i className="fas fa-arrow-left arrows" onClick={this.carouselClickRight}></i>
                <div className="cardDesign">
                    <div className="mainInfos">
                        <p className="companyName">{JobItems[this.state.indexJob].companyName}</p>
                        <p className="jobName">{JobItems[this.state.indexJob].position}</p>
                        <p className="dates">{JobItems[this.state.indexJob].dates}</p>
                    </div>
                    <div className="descriptionInfos">
                        <p className="tasks">{JobItems[this.state.indexJob].jobDescription}</p>
                    </div>
                </div>
                <i className="fas fa-arrow-right arrows" onClick={this.carouselClickRight}></i>
            </div>

            <div className="mobileCardsDiv">
                    {JobItems.map((item,index) => {
                        return(
                            <div className="mobileCardDesign">
                                <div className="mobileInfos">
                                    <p className="jobName">{item.position}</p>
                                    <p className="companyName">{item.companyName}</p>
                                    <p className="dates">{item.dates}</p>
                                </div>
                                <div className="mobileDescriptions">
                                    <p>{item.jobDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                    {/*
                <div className="mobileCardDesign">
                    <div className="mobileInfos">
                        <p className="jobName">Nom du poste</p>
                        <p className="companyName">Nom de l'entreprise</p>
                        <p className="dates">Dates du job</p>
                    </div>
                    <div className="mobileDescriptions">
                        <p>Blabla il s'en est passé des trucs durant cette période haha.</p>
                    </div>
                </div>
                    */}

            </div>
            </>
        )
    }
}



export default Experience