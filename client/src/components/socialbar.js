import React, { Component } from 'react';
import './socialbar.css';

class Socialbar extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {

        const { width } = this.state;
        const isMobile = width <= 766;

        if (isMobile) {
            return (null)
        } else {
            return (

                <div className="socialbar-section">

                    <div className="container">

                        <div className="social">
                            <socialbar><a href="https://www.linkedin.com/in/donald-hui" target="_blank" className="fa fa-linkedin-square fa-2x" aria-hidden="true"></a></socialbar>
                        </div>

                        <div className="social">
                            <socialbar><a href="https://github.com/donaldjhui" target="_blank" className="fa fa-github fa-2x" aria-hidden="true"></a></socialbar>
                        </div>

                        <div className="social">
                            <socialbar><a href="mailto:donaldjhui@gmail.com" className="fa fa-envelope fa-2x" aria-hidden="true"></a></socialbar>
                        </div>
                    </div >

                </div >
            )
        }
    }
}

export default Socialbar;