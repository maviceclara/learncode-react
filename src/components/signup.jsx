import React from 'react';
import '../css/signin.css'





class Signup extends React.Component {
    render(){
        return(
            <div className="">
                <div className="container">
                    <h4 className="text-center pt-5">Sign up</h4>
                    <div className="row">
                        <div className="col-md-4 col-sm-4" />
                        <div className="col-md-4 col-sm-4">
                            <div className="form">
                                <form action>
                                    <div className="form-group">
                                        <label htmlFor="name"> Username:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Password:</label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    <button type="submit" className="btn btn-outline-light btn-lg button ">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;