import React, { Component } from 'react';
import '../css/App.css';
import Videos from '../components/videos.jsx'
import Contact from '../components/contact.jsx'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import Maincourses from '../components/courses.jsx';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-image">
          <div className="container ">
              <Navbar />
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
                    
                    {/* <a href="/" className="btn btn-lg btn-outline-light banner-btn">Get started</a> */}
                    <a href="/" className="btn btn-lg btn-outline-light banner-btn " >Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          
          
        </div>
        <div className=" courses mt-4">
          <div className="container ">
            <div className="row">
              < Maincourses />
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

export default Home;
