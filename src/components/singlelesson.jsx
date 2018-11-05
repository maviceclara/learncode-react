import React, { Component } from 'react';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import ReactMarkdown from 'react-markdown';


class Singlelesson extends Component {
    state = {
        course: {},
        lesson: {},
        content:'',
        loading: true
    }
    componentDidMount() {
        const coursePromise = axios.get(
          `https://staging-api.mentortemple.com/course/${this.props.match.params.id}`
        );
    
        coursePromise.then(response => {
            // console.log(response.data.courses[0].id)
            // console.log(response.data)
            const lesson = response.data.lessons.find((l) => l.slug === this.props.match.params.lesson)
            this.setState({
                course: response.data,
                lesson: lesson,
                // loading: false
            })
            axios.get(lesson.url).then(response => {
                
                this.setState({
                    content:response.data,
                    loading: false
                })

                
            })
        });
    }
    render(){
        return(
            <div>
                 {
                    this.state.loading && <div className="loader">
                       <LoadingScreen
                            loading={true}
                            bgColor='transparent'
                            spinnerColor='black'
                            textColor='#676767'
                            // logoSrc='/logo.png'
                            text=''
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
                      

                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8 text-justify">
                                    <h3 className="text-center mb-4">{this.state.course.title}</h3>
                                    {/* <h4 className="text-center mb-4">{this.state.lesson.title}</h4> */}
                                    {/* <h4 >{this.state.lesson.description}</h4>  */}
                                    {/* <p>{this.state.content}</p> */}
                                    <ReactMarkdown source={this.state.content}/>
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

export default Singlelesson;