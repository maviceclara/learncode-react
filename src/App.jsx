import React, { Component } from 'react';
import './css/App.css';
import Videos from './components/videos.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Maincourses from './components/courses.jsx';
import {Link} from 'react-router-dom';
import Navbar from './components/navbar.jsx'





class App extends Component {

 
  render() {
        const loggedin = (<span><a href="/" className="btn btn-lg btn-outline-light banner-btn ml-4 learn-more"  >Learn more</a></span> )

        const noLoggedin = (
        <span>
          <Link to="/signup" className="btn btn-lg btn-outline-light banner-btn">Get started</Link>
          <Link to="/about" className="btn btn-lg btn-outline-light banner-btn ml-4 learn-more"  >Learn more</Link>
        </span>)
    return (
      <div className="App">
        <div className="bg-image">
        <div className="container">
                <Navbar />          
              </div> 
          
          
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner">
                    <h1 className="banner-heading">Learn front-end web development</h1>
                    <h3 className="slidingHorizontal ">
                      <span>A platform for beginners interested in front-end web development. </span> 
                      <span>Free courses to learn from.</span> 
                      
                    </h3>
                    {/* <h4 className="banner-subheading">A platform for beginners interested in programming</h4> */}
                    
                    {localStorage.getItem('auth') === null ? noLoggedin : loggedin}
                  </div>
                </div>
              </div>
            </div>
          
          
        </div>
        <div className="coursescon " >
          <div className="container ">
            <div className="row">
              < Maincourses id="course" />
            </div>
          </div>
        </div>

        <Videos />

        <Contact  id="contact"/>

        <Footer />
      </div>
    );
  }
}

export default App;
