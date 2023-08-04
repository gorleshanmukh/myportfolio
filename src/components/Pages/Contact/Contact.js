import React, { useRef, useEffect } from 'react';
import './contact.css';

const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Yeaaah, this does not work yet. Sorry! Drop an email to gorleshanmukh@gmail.com");
    }

    return (<section id={"contact"}>
            <div className={"section-container contact-main-container"} >
                <div className={"contact-container"}>
                    <div className={"contact-left"}>
                        <div className={"contact-header"}>
                            <h1>Get In Touch</h1>
                            <p>Feel free to reach out to me for any questions or opportunities.</p>
                        </div>
                        <div className={"contact-information-container"}>
                            <div className={"contact-information"}>
                                <img className={"contact-icon"} src={"icons/email.svg"} alt={"email"} />
                                <div className={"contact-text"}>gorleshanmukh@gmail.com</div>
                            </div>
                            <div className={"contact-information"}>
                                <img className={"contact-icon"} src={"icons/phone.svg"} alt={"phone"} />
                                <div className={"contact-text"}>+1 929 944 5431</div>
                            </div>
                            <div className={"contact-information"}>
                                <img className={"contact-icon"} src={"icons/icons8-linkedin.svg"} alt={"linkedin"} />
                                <div className={"contact-text"}>
                                    <a className={"links"} href={"https://www.linkedin.com/in/gorleshanmukh/"}
                                        target={"_blank"} >
                                    Linked In
                                    </a>
                                </div>
                            </div>
                            <div className={"contact-information"}>
                                <img className={"contact-icon"} src={"icons/location.svg"} alt={"location"} />
                                <div className={"contact-text"}>Charlotte NC 27703</div>
                            </div>
                        </div>
                    </div>
                    <div className={"contact-right"}>
                        <div className={"contact-form-container"}>
                            <input placeholder={"Your Name"} className={"contact-input"} type={"text"}/>
                            <input placeholder={"Your Email"} className={"contact-input"} type={"text"}/>
                            <textarea rows={10} placeholder={"Type your message!"} className={"contact-input-textarea"} />
                            <button onClick={handleSubmit} className={"contact-button"}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
        );
};

export default Contact;
