import React from 'react';
import '../css/courses.css'



class Videos extends React.Component{
   
    render(){
    return(
        <section id="courses">
            <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <div className="section-title"  >
                    <h2>Popular Topics/Videos <small style={{marginTop:'20px',marginBottom:'20px'}}>Upgrade your skills with by videos of some of our topics</small></h2>
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
                                        <h3><a href="https://www.youtube.com/watch?v=y3UH2gAhwPI">HTML and CSS</a></h3>
                                        <p>The Ultimate guide for learning HTML and CSS for beginners</p>
                                    </div>
                                    <div className="courses-info">
                                        <div className="courses-author">
                                            <img src={require('../img/author-image1.jpg')} className="img-responsive" alt="" />
                                            <span>Bucki Robert</span>
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
                                <h3><a href="https://www.youtube.com/watch?v=T-HGdc8L-7w"> Javascript OOP</a></h3>
                                <p>Introduction to Object-oriented programming in Javascript</p>
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
                                <h3><a href="https://www.youtube.com/watch?v=jV8B24rSN5o">CSS Grid Layout</a></h3>
                                <p>Learn how to create grid based layout and alignments.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image3.jpg')} className="img-responsive" alt="" />
                                    <span>Catherine</span>
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
                                <h3><a href="https://www.youtube.com/watch?v=K_jS1anlVAM">React Components</a></h3>
                                <p>Building your first component in React.js</p>
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
                                <h3><a href="https://www.youtube.com/watch?v=Wm6CUkswsNw">Responsive Web Design</a></h3>
                                <p>Create responsive websites with CSS</p>
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
                                <h3><a href="https://www.youtube.com/watch?v=FgA0WQ5j45Y">Javascript Basic Functions</a></h3>
                                <p>Leanr how to create JavaScript function.</p>
                                </div>
                                <div className="courses-info">
                                <div className="courses-author">
                                    <img src={require('../img/author-image1.jpg')} className="img-responsive" alt="" />
                                    <span>Jesse Warden</span>
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

export default Videos;