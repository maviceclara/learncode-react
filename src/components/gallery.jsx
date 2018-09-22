import React, { Component } from 'react';
import '../css/gallery.css'
// import * as contentful from 'contentful'
import Maincourses from '../components/courses2.jsx'




class Gallery extends Component{
    
        state= {
            courses:[]
        }



        //  client = contentful.createClient({
        //     space: 'bhktxp74znbv',
        //     accessToken: 'dcc313c6c36a933f74fbbd54935168b085faf916dfa5d93a5c0ccab6b57315fe' })

                
        //     componentDidMount() {
        //         this.fetchPosts().then(this.setCourses);
        //       }
        //       fetchPosts = () => this.client.getEntries()
        //       setCourses = response => {
        //           console.log()
        //         this.setState({
        //           courses: response.items
        //         })
        //     }

            // fetchPosts = () => this.client.getEntries()
            //     setCourses = response => {
                    
            //         this.setState({
            //         posts: response.items
            //         })
            //     }

   
    render(){
        return(
            <div className="container">
                <div className="my-5 divider">
                
                    <h6 className="course_title">FRONT-END WEB DEVELOPMENT</h6>
                      <div className="row">
                        < Maincourses />

                    </div>
                </div>


                <div className="my-5">
                    <h6 className="course_title">BACK-END WEB DEVELOPMENT</h6>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                    <img src={require('../img/codes.jpg')} alt="Lights" className="course_img"/>
                                    <div className="caption text-muted">
                                        <p>Learn HTML</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                    <img src={require('../img/laptops.jpg')} alt="Nature" className="course_img"/>
                                    <div className="caption text-muted">
                                        <p>Learn CSS</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                    <img src={require('../img/laptop.jpg')} alt="Fjords"  className="course_img"/>
                                    <div className="caption text-muted">
                                        <p>Learn Javascript</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                <img src={require('../img/coding.jpg')} alt="Fjords" className="course_img" />
                                <div className="caption text-muted">
                                    <p>Learn React</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my-5">
                    <h6 className="course_title">UI/UX DESIGN</h6>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                    <img src={require('../img/laptop2.jpg')} alt="Lights" className="course_img" />
                                    <div className="caption text-muted">
                                        <p>Learn HTML</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                    <img src={require('../img/coding.jpg')} alt="Nature"  className="course_img" />
                                    <div className="caption text-muted">
                                        <p>Learn CSS</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                    <img src={require('../img/codes2.jpg')} alt="Fjords" className="course_img" />
                                    <div className="caption text-muted">
                                        <p>Learn Javascript</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="/">
                                <img src={require('../img/codebanner.jpg')} alt="Fjords"  className="course_img"/>
                                <div className="caption text-muted">
                                    <p>Learn React</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;