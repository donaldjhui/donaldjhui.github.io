import React, { Component } from 'react';
import Typical from 'react-typical';
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
            <div className="main home-section outer-container" id="home">
                <div className="fade-in-hello" id="left">
                    <img src={Donald} alt="Donald"/>
                </div>
                <div className="jumbotron fade-in-hello" id="right">
                    <h1><b><Typical steps={['Hi!', 1000, 'Welcome to my website!', 1000, 'My name is Donald Hui.', 2000]}
                        loop={Infinity}
                        wrapper="p" />
                    </b></h1>
                </div>
            </div>
        )
    }
}