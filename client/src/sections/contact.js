import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {

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
            return (
                <div className="contact-section outer-container" id="contact">

                    <div className="p-5 socialbottom">
                        <socialwidth><socialbar><a href="https://www.linkedin.com/in/donald-hui" target="_blank" className="fa fa-linkedin-square fa-2x" aria-hidden="true"></a></socialbar></socialwidth>

                        <socialwidth><socialbar><a href="https://github.com/donaldjhui" target="_blank" className="fa fa-github fa-2x" aria-hidden="true"></a></socialbar></socialwidth>

                        <socialwidth><socialbar><a href="mailto:donaldjhui@gmail.com" className="fa fa-envelope fa-2x" aria-hidden="true"></a></socialbar></socialwidth>
                    </div >

                    <div className="designedby">
                        <p>
                            Copyright &copy; 2020 Donald Hui
                        </p>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="contact-section outer-container" id="contact">
                    <div className="designedby">
                        <p>
                            Copyright &copy; 2020 Donald Hui
                        </p>

                    </div>
                </div>
            )
        }
    }
}

export default Contact;