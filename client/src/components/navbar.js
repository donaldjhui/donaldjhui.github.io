import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            //     <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">

            //         <Link to="/" className="navbar-brand">
            //             D
            //         </Link>

            //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span class="navbar-toggler-icon"></span>
            //         </button>

            //         <div className="collapse navbar-collapse" id="navbarContent">
            //             <ul className="navbar-nav mr-auto">
            //                 <li className="nav-item">
            //                     <Link to="/Projects" className="nav-link">
            //                         Projects
            //                     </Link>
            //                 </li>
            //             </ul>
            //         </div>

            //     </div>

            // </nav>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="d-flex w-50 order-0">

                    <Link to="/" className="navbar-brand">
                        <img src="./D.png" height="38" />
                    </Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-link">
                                <h5>Projects</h5>
                            </Link>
                        </li>
                    </ul>
                </div>
                <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
            </nav >
        )
    }
}