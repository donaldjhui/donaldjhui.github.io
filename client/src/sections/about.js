import React, { Component } from 'react';

// import { motion } from 'framer-motion';

class About extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="about-section outer-container" id="about">
                <div className="flex-container-about">
                    <div className="flex-top">
                {/* <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                > */}   
                        <h2>Who Am I?</h2>
                {/* </motion.div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;