import React, { Component } from 'react';
import './css/App.css';
import Course from './components/courses.jsx'
import Section from './components/section.jsx'
import Contact from './components/contact.jsx'
import {Link} from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-image">
          <div className="container ">
              <nav className="navbar navbar-expand-md navbar-light sticky-top fixed-top">
                <a className="navbar-brand brand-name" href="/"> 
                <h2 style={{fontFamily: '"Lobster Two", cursive'}}>LearnCode</h2></a>   
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarResponsive">
                  <span className="navbar-toggler-icon"> </span>
                </button> 
                <div className="collapse navbar-collapse" id="navBarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item  ">
                      <a className="nav-link " href="/">Home</a>
                    </li>  
                    <li className="nav-item">
                      <a className="nav-link " href="/">About</a>
                    </li>  
                    <li className="nav-item">
                      <a className="nav-link" href="/">Courses</a>
                    </li>  
                    <li className="nav-item">
                      <a href="#contact" className="nav-link">Contact</a>
                    </li>  
                    <li className="nav-item">
                      <Link to="/signup.jsx" className="nav-link" href="/"></Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/signin.jsx" className="nav-link" href="/"> </Link>
                    </li> 
                   
                  </ul>
                </div>
              </nav>           
          </div>
          
          
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner">
                    <h1 className="banner-heading">Learn faster than your peers</h1>
                    <h3 class="slidingHorizontal ">
                      <span>A platform for beginners instrested in programming</span> 
                      <span>Free courses to learn from.</span> 
                      <span>Editor to practice with.</span>
                    </h3>
                    {/* <h4 className="banner-subheading">A platform for beginners interested in programming</h4> */}
                    
                    <a href="/" className="btn btn-lg btn-outline-light banner-btn">Get started</a>
                    <a href="/" className="btn btn-lg btn-outline-light banner-btn ml-4" >Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          
          
        </div>

        <Section />
        <Course />
        <Contact  id="contact"/>

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
                      <form action="#" method="get">
                        <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required />
                        <input type="submit" className="form-control" name="submit" id="form-submit" defaultValue="Send me" />
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

export default Home;
