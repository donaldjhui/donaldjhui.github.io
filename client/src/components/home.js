import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Typical from 'react-typical'

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
        };
    }



    render() {
        return (
            <div className="main container">
                <div className="jumbotron main">
                    <h1><b><Typical steps={['Hi!', 1000, 'Welcome to my website!', 1000, 'My name is Donald Hui.', 2000]}
                        loop={Infinity}
                        wrapper="p" />
                    </b></h1>
                </div>
            </div>

        )
    }
}