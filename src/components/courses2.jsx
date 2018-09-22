import React from 'react';
import '../css/gallery.css';
import axios from 'axios';
import {Link} from 'react-router-dom';



class Maincourses extends React.Component{
    constructor(){
        super()
        this.state = {
            courses:[],
            lessons: []
        }
    }
        componentDidMount() {
            const coursesPromise = axios.get(
              'https://staging-api.mentortemple.com/course'
            );
        
            coursesPromise.then(response => {
                // console.log(response.data.courses[0].id)
                console.log(response.data.courses.lessons)
              this.setState({
               courses: response.data.courses,
               lessons: response.data.courses[0].lessons
              });
              console.log(this.state)
            });
        }

        getCourses = () => {
            const courses = this.state.courses;
        
            const coursesJSX = courses.map(course => {
                console.log('yea')
              return (
                <div key={courses.id}>
                    < div className="row">
                        <div className="col-md-3">
                            <div className="thumbnail my-5">
                                <a href="/">
                                    <img src={require('../img/laptop4.jpg')} alt=""  className="course_img" />
                                    <div className="caption text-muted">
                                        <h5 className="">{course.title}</h5>
                                        {/* <p className="">{course.description}</p> */}
                                        <Link to={`/courses/${courses[0].lessons}`} className="btn btn-info">Open course</Link>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              );
            });
            return coursesJSX;
          };
    render(){
        return(
            <div className="container">{this.getCourses()}</div>
        )
    }
}

export default Maincourses;