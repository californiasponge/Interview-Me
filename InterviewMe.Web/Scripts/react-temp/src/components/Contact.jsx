import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/contact.css';
import Logo from '../assets/img/InterviewMe-Logo.png';

class Contact extends Component {

    render() {
        return (
            <div>
                <div className="container shadow-the-back-sm">
                    <div className="row">
                        <div className="col-lg-11 col-11 contact-us">
                            <h4 className="">CONTACT US</h4>
                        </div>
                        <div className='row social'>
                            <div className='col-1'>
                                <a href="https://www.instagram.com/ltimin"><i className="fa fa-instagram icons"></i></a>
                            </div>
                            <div className='col-1'>
                                <a href="https://www.linkedin.com/in/lawrence-tucker-4a824159"><i className="fa fa-linkedin icons"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row bg-light mb-4">
                        <div className="col-lg-12">
                            <h5>ADDRESS:</h5>
                        </div>
                        <div className="col-lg-4 col-4">
                            <h6>LA Hacks @ UCLA, Los Angeles, CA</h6>
                        </div>
                        <div className="col-lg-8 col-8 contact-info">
                            <p className="m-0 text-danger theme-color-2"><i className="fa fa-phone-square icons-rev" aria-hidden="true"></i> 310-555-9111</p>
                            <p className="m-0 theme-color-2"><i className="fa fa-envelope icons-rev" aria-hidden="true"></i> UCLALikeABruin@gmail.com</p>
                        </div>
                    </div>
                    <div className="row bg-light mb-4">
                        <div className="col-lg-6 col-12">
                            <form>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Name :" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Company" />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger mb-4">Send</button>
                            </form>
                        </div>
                        <div className="col-lg-6 col-12 map">
                            <div style={{ width: "100%" }}><iframe width="100%" height="350px" src="https://www.mapsdirections.info/en/custom-google-maps/map.php?width=100%&height=600&hl=ru&q=301%20Westwood%20Plaza%20Los%20Angeles%2C%20CA%2090095+(Interview%20Me)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='google' className="shadow-the-back-sm"><a href="https://www.mapsdirections.info/en/custom-google-maps/">Create Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Contact;