import React, { Component } from 'react';

class Contact extends Component {
    state = {};
    render() {
        return (

            <div className="contact-section footer" id="contact">
                {/* <h2>Get in Touch</h2>
                <div id="contact-form">
                            <form method="POST" action="https://formspree.io/donaldjhui@gmail.com">
                                    <input type="hidden" name="_subject" value="Contact request from personal website"></input>
                        <input type="email" name="_replyto" placeholder="Your email" required></input>
                        <textarea name="message" placeholder="Your message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <h4>Or email me at donaldjhui@gmail.com</h4>
                <h4>510.432.8948</h4> */}


                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 copyright">
                            <p>
                                Copyright &copy; 2020 Donald Hui
                    </p>
                        </div>
                        <div class="col-sm-2 top">
                            <span id="to-top">
                                <i class="fa fa-chevron-up" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="col-sm-5 social">
                            <ul>
                                <li>
                                    <a href="https://github.com/donaldjhui" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/donald-hui/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/donaldjhui" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact;