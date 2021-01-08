import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Typical from 'react-typical'
import './home.css';

import Donald from './images/Donald.jpg'

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
        };
    }



    render() {
        return (
            <div className="main container home-section" id="home">
                <div id="left">
                    <img src={Donald} alt="Donald" />
                </div>
                <div className="jumbotron" id="right">
                    <h1><b><Typical steps={['Hi!', 1000, 'Welcome to my website!', 1000, 'My name is Donald Hui.', 2000]}
                        loop={Infinity}
                        wrapper="p" />
                    </b></h1>
                </div>
            </div>


        )
    }
}