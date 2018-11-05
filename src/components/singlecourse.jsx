import axios from 'axios'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/singlecourse.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';
import LoadingScreen from 'react-loading-screen';




class Singlecourse extends Component {
    state = {
        course: {},
        loading: true
    }
    componentDidMount() {
        if(!localStorage.getItem('auth')) {
            return this.props.history.push('/signin')
        }

        const coursePromise = axios.get(
          `https://staging-api.mentortemple.com/course/${this.props.match.params.id}`
        );
    
        coursePromise.then(response => {
            // console.log(response.data.courses[0].id)
            // console.log(response.data)
            this.setState({
                course: response.data,
                loading: false
            })
        });
    }
    render() {
        return(
             <div className="singlecourse-bg">
                    
                {
                    this.state.loading && <div className="loader">
                        <LoadingScreen
                            loading={true}
                            bgColor='transparent'
                            spinnerColor='black'
                            textColor='#676767'
                            // logoSrc='/logo.png'
                            text='Loading'
                        > 
                        </LoadingScreen>
                    </div>
                }
                {
                    !this.state.loading &&
                        

                        <div className=" slug">
                            <div className="navbar-bg"> 
                                <Navbar />
                            </div>
                           
                            <div className='container mb-5'>
                                <div className="my-5 ">
                                    <h3>{this.state.course.title}</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        {this.state.course.lessons.map(lesson => {
                                            return   <div className="card cardstyle mt-3">        
                                                        <h5 ><Link to={`/courses/${this.state.course.slug}/${lesson.slug}`} className="text-dark">{lesson.title}</Link></h5>
                                                        {/* <p><Link to={`/courses/${this.state.course.slug}/${lesson.slug}`}>{lesson.description}</Link></p> */}
                                                    </div>
                                         })}
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                       
                            <Footer />
                        </div>
                }
         </div>
    
        )
    }
}

export default Singlecourse;