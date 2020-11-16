import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'

class Navbar extends Component{
    state = { clicked : false }

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
        const a = this.state.clicked
        console.log(a)
    }

    render(){
        return(
            <nav className="navbarItems">
                <h1 className="navbar-logo">EDDAHABI Riad</h1>
                <div className={this.state.clicked ? "menu-icon active" : "menu-icon"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar