import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import './navbar.css';

import { Link } from 'react-scroll';

import classnames from "classnames";

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });

    }

    render() {

        return (
            // <nav class="navbar navbar-expand-md navbar-dark">
            <nav className={classnames("navbar navbar-expand-md", { "navbar--hidden": !this.state.visible })}>

                <div className="d-flex w-50 order-0">

                    <div className="color-nav shadow">
                        {/* <Link to="/" className="grow navbar-brand">
                            <div id="header-logo-element" href="/">
                                <a>D</a>
                            </div>
                        </Link> */}

                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={1} duration={1500} className="grow navbar-brand">
                            <div id="header-logo-element" href="/">
                                <a>D</a>
                            </div>
                        </Link>
                    </div>

                </div>

                {/* collapsing navbar toggler when window is small */}
                <button className="navbar-toggler color-nav shadow custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon grow">
                    </span>
                </button>

                <div className="navbar-collapse collapse order-1" id="collapsingNavbar" aria-expanded="false" aria-controls="collapsingNavbar">
                    <ul className="navbar-nav color-nav shadow">
                        {/* <li className="nav-item">
                            <Link to="/Projects" className="grow nav-link">
                                <h5>Projects</h5>
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={1} duration={1500} className="grow nav-link">
                                <h5>Projects</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link activeClass="active" to="main" spy={true} smooth={true} offset={1} duration={1500} className="grow nav-link">
                                <h5>Main</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={1} duration={1500} className="grow nav-link">
                                <h5>About</h5>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={1} duration={1500} className="grow nav-link">
                                <h5>Contact</h5>
                            </Link>
                        </li>
                    </ul>
                </div>

                <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>

            </nav >
        )
    }
}