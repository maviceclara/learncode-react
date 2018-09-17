import React from 'react';
import '../css/signin.css'




class Signin extends React.Component {
    render(){
        return(
            <div className="">
                <div className="container">
                    <h4 className="text-center pt-5">Sign in</h4>
                    <div className="row">
                        <div className="col-md-4 col-sm-4" />
                        <div className="col-md-4 col-sm-4">
                            <div className="form" id="signin">
                                <form action>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Password:</label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    < button type="submit" className="btn btn-outline-light btn-lg button">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;