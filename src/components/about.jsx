import React from 'react';
import '../css/about.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';



class About extends React.Component{
    render(){
        return(
            <div className="about" id="#about">
               <div className="navbar-bg"> 
                    <Navbar />
                </div>
                <div className="container about-text">
                    <h2 className="text-center">About</h2>
                    <div className="row">
                        <div className="col-md-6 ">   
                            <h3 className="mb-5"> Learn faster than your peers</h3> 
                            
                            <p> Become an expert in weeks, not months. <strong>Learncode</strong> has courses with up-to-date, bite-sized lessons that deliver the most value for the time you invest in.  .</p>       
                        </div>

                        <div className="col-md-6 section">
                        </div>
                    </div>

                     <div className="row">
                        <div className="col-md-6 secondsection">   
                            
                        </div>

                        <div className="col-md-6 heading">
                            <h3>Short, crisp courses written by experts</h3>

                            <p>Courses on <strong>Learncode</strong> are written to make sure they’re worth every bit of your time. They’re concise, clear and to the point. </p>
                            
                            <p>We make sure that only the best content makes it to our courses, which cover a wide range of topics in front-end web development.</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default About;

