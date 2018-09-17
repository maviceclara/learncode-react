import React, { Component } from 'react';
import '../css/App.css';




class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                  <div className="section-title">
                    <h2>Popular coursces</h2>
                  </div>
                  <div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>React</p>
                  </div>
                  <ul className="social-icon">
                    <li><a href="/" className="" attr="facebook icon" ><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="/" className="" ><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/" className="" ><i className="fab fa-instagram"></i></a></li>
                  </ul>
                  <div className="copyright-text"> 
                    <p>Copyright © 2018 Company</p>
                    <p>Design: <a rel="/" href="/" >Learn code</a></p>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                  <div className="section-title">
                    <h2>Contact Info</h2>
                  </div>
                  <div>
                    <p>000000000, 000000000</p>
                    <p><a href="/">learncode@youremail.co</a></p>
                  </div>
                  <div className="footer_menu">
                    <h2>Quick Links</h2>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Terms &amp; Conditions</a></li>
                      <li><a href="/">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="footer-info newsletter-form">
                  <div className="section-title">
                    <h2>Newsletter Signup</h2>
                  </div>
                  <div>
                    <div className="form-group">
                      <form >
                        <input type="email" className="form-control" placeholder="Enter your email" name="email"  required />
                        <input type="submit" className="form-control" name="submit"   />
                      </form>
                      <span><sup>*</sup> Please note - we do not spam your email.</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </footer>
    

        
        
      </div>
    );
  }
}

export default Footer;
