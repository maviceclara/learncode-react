import React, { Component } from 'react';
import './css/App.css';
import Course from './components/courses.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Gallery from './components/gallery.jsx';
import {Link} from 'react-router-dom';





class App extends Component {
  

 
  render() {
    return (
      <div className="App">
        <div className="bg-image">
          <div className="container ">
              <nav className="navbar navbar-expand-md navbar-light sticky-top " >
                <a className="navbar-brand brand-name" href="/"> 
                <h2 className="brand">LearnCode</h2></a>   
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarResponsive">
                  <span className="navbar-menu" >Menu </span>
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
                      <Link to="/courses2"className="nav-link">Courses</Link>
                    </li>  
                    <li className="nav-item">
                      <a href="#contact" className="nav-link">Contact</a>
                    </li>  
                    <li className="nav-item">
                      <Link to="/signup" className="nav-link" >Sign up</Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/signin" className="nav-link" >Sign in</Link>
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
                    <h3 className="slidingHorizontal ">
                      <span>A platform for beginners interested in programming</span> 
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

       
        <Gallery />
        <Course />
        <Contact  id="contact"/>
        <Footer />
      </div>
    );
  }
}

export default App;
