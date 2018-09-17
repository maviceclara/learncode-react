import React from 'react';
import '../css/section.css'



class Section extends React.Component{
    render(){
        return(
            <div className="sectionpositioning">
                <div className="container">
                    <h2 className="text-center">For beginners who have no idea on what to learn.</h2>
                    <div className="row">
                        <div className="col-md-6 heading">
                            <ul>
                                <li className="">If you’re looking to learn how to code, the sheer number of programming languages may be overwhelming </li>
                                
                                <li> What language should you indeed learn?</li>
                                
                                <li><a href="/" class="">Click here</a> to get options to help you choose</li>
                            </ul>
                        </div>

                        <div className="col-md-6 section">
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Section;

