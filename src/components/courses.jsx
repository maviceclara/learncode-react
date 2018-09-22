import React from 'react';
import '../css/courses.css'



class Course extends React.Component{
   
    render(){
    return(
        <section id="courses">
            <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <div className="section-title"  >
                    <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="item">
                                <div className="courses-thumb">
                                    <div className="courses-top">
                                        <div className="courses-image">
                                            <img src={require('../img/courses-image1.jpg')} className="img-responsive" alt="" />
                                        </div>
                                        <div className="courses-date">
                                            <span><i className="fas fa-calendar-alt" /> 12 / 7 / 2018</span>
                                            <span><i className="far fa-clock" /> 7 Hours</span>
                                        </div>
                                    </div>
                                    <div className="courses-detail">
                                        <h3><a href="/">uaiidiuihaiu</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="courses-info">
                                        <div className="courses-author">
                                            <img src={require('../img/author-image1.jpg')} className="img-responsive" alt="" />
                                            <span>Mark Wilson</span>
                                        </div>
                                        <div className="courses-price">
                                            <a href="/"><span>Free</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="item">
                            <div className="courses-thumb">
                                <div className="courses-top">
                                <div className="courses-image">
                                    <img src={require('../img/courses-image2.jpg')} className="img-responsive" alt="" />
                                </div>
                                <div className="courses-date">
                                    <span><i className="fas fa-calendar-alt" /> 20 / 7 / 2018</span>
                                    <span><i className="far fa-clock" /> 4.5 Hours</span>
                                </div>
                                </div>
                                <div className="courses-detail">
                                <h3><a href="/">Graphic &amp; Web Design</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image2.jpg')} className="img-responsive" alt="" />
                                    <span>Jessica</span>
                                </div>
                                <div className="courses-price">
                                    <a href="/"><span>Free</span></a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="item">
                            <div className="courses-thumb">
                                <div className="courses-top">
                                <div className="courses-image">
                                    <img src={require('../img/courses-image3.jpg')} className="img-responsive" alt="" />
                                </div>
                                <div className="courses-date">
                                    <span><i className="fas fa-calendar-alt" /> 15 / 8 / 2018</span>
                                    <span><i className="far fa-clock" /> 6 Hours</span>
                                </div>
                                </div>
                                <div className="courses-detail">
                                <h3><a href="/">hyaisidsi</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image3.jpg')} className="img-responsive" alt="" />
                                    <span>Catherine</span>
                                </div>
                                <div className="courses-price free">
                                    <a href="/"><span>Free</span></a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>            
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="item">
                            <div className="courses-thumb">
                                <div className="courses-top">
                                <div className="courses-image">
                                    <img src={require('../img/courses-image4.jpg')} className="img-responsive" alt="" />
                                </div>
                                <div className="courses-date">
                                    <span><i className="fas fa-calendar-alt" /> 10 / 8 / 2018</span>
                                    <span><i className="far fa-clock" /> 8 Hours</span>
                                </div>
                                </div>
                                <div className="courses-detail">
                                <h3><a href="/">ujhaisijus</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image4.jpg')} className="img-responsive" alt="" />
                                    <span>Mark Wilson</span>
                                </div>
                                <div className="courses-price">
                                    <a href="/"><span>Free</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                            <div className="item">
                            <div className="courses-thumb">
                                <div className="courses-top">
                                <div className="courses-image">
                                    <img src={require('../img/courses-image5.jpg')} className="img-responsive" alt="" />
                                </div>
                                <div className="courses-date">
                                    <span><i className="fas fa-calendar-alt" /> 10 / 8 / 2018</span>
                                    <span><i className="far fa-clock" /> 8 Hours</span>
                                </div>
                                </div>
                                <div className="courses-detail">
                                <h3><a href="/">hjajsklaj</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image1.jpg')} className="img-responsive" alt="" />
                                    <span>Mark Wilson</span>
                                </div>
                                <div className="courses-price">
                                    <a href="/"><span>Free</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                            <div className="item">
                            <div className="courses-thumb">
                                <div className="courses-top">
                                <div className="courses-image">
                                    <img src={require('../img/courses-image1.jpg')} className="img-responsive" alt="" />
                                </div>
                                <div className="courses-date">
                                    <span><i className="fas fa-calendar-alt" /> 10 / 8 / 2018</span>
                                    <span><i className="far fa-clock" /> 8 Hours</span>
                                </div>
                                </div>
                                <div className="courses-detail">
                                <h3><a href="/">hhjskdkjkslkj</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image1.jpg')} className="img-responsive" alt="" />
                                    <span>Mark Wilson</span>
                                </div>
                                <div className="courses-price">
                                    <a href="/"><span>Free</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    
    )
}

}

export default Course;