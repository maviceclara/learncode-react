import React, { Component } from 'react';
import '../css/contact.css'



class Contact extends Component {
    render(){
        return(
            <section id="contact">
                <div className="container contactcon">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <form id="contact-form"  >
                                <div className="sectiontitle">
                                <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                <input type="text" className="form-control" placeholder="Enter full name" name="name" required />
                                <input type="email" className="form-control" placeholder="Enter email address" name="email" required />
                                <textarea className="form-control" rows={6} placeholder="Tell us about your message" name="message" required defaultValue={""} />
                                </div>
                                <div className="col-md-4 col-sm-12">
                                <input type="submit" className="form-control" name="send message" defaultValue="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 col-sm-12">
                        <div className="contact-image">
                            {/* <img src={require('../img/contact-image.jpg')} className="" alt="Smiling Two Girls" /> */}
                        </div>
                        </div>
                    </div>
                </div>
          </section>
        )
    }
}

export default Contact;