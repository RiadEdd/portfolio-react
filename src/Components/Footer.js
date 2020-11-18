import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{   
    render(){
        return(
            <div className="footerDiv">
                <p>Designed & Built by Riad Eddahabi</p>
                <a href="brittanychiang.com">Inspired by <span>Brittany Chiang</span></a>
            </div>
        )
    }
}

export default Footer