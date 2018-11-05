import React from 'react';
import '../css/signin.css';
import {Link} from 'react-router-dom';
import axios from 'axios';






class Signup extends React.Component {
    constructor() {
        super()
      
        this.state = {
                  username:'',
                  email:'',
                  password:'',
                  loading: false,
                 serverErrors:''
        }
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    
    }
    
    submitForm = () => {
      let newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }

        this.setState({
            loading: true
    })

    if(this.state.username && this.state.email === "")
        this.setState({
            serverErrors: 'Username is required'
        })
    

    let registerPromise= axios.post('https://staging-api.mentortemple.com/auth/local/register', newUser);
    registerPromise.then((response)=>{
        localStorage.setItem('auth', JSON.stringify(response.data))
        this.setState({
          loading: false,
         
        })
        return (this.props.history.push('/')) 
    }).catch((error)=>{
       
      this.setState({
        serverErrors: error.response.data.message,
       
        loading: false
      })
  
      setTimeout(()=> {
        this.setState({
        //  serverErrors:'',
          username:'',
          email:'',
          password:'',
         
        })
      },3000)
     
    })
  }
    render(){
        
        return(
            <div className="user" >
                
                <div className="container">
                        <h4 className="text-center pt-5 signText ">Sign up</h4>
                        <div className="row">
                        
                            <div className="col-md-12 col-sm-12">
                                <div className="form">
                                    <form >
                                        <div className="form-group formdiv" id="">
                                         <div className="errorMessage test">{this.state.serverErrors}</div>
                                            {/* <label htmlFor="name"><i className="fas fa-user"></i> </label>
                                            */}
                                            {/* <input type="text" className="form-control" id="name" /> */}
                                            <div className="input-group my-3 test" >
                                                <div className="input-group-prepend">
                                                <span className="input-group-text" ><i className="fas fa-user"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Name"  name={"username"} value={this.state.username} onChange={this.handleChange}required/>
                                               
                                            </div>

                                        </div>
                                        <div className="form-group formdiv" id="">
                                            {/* <label htmlFor="email">Email address:</label>
                                            <input type="email" className="form-control" id="email" /> */}
                                            <div className="input-group mb-3" >
                                                <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                                </div>
                                                <input type="email" className="form-control" placeholder="Email"  name={"email"}  value={this.state.email} onChange={this.handleChange} required/>
                                               
                                            </div>
                                        </div>
                                        <div className="form-group" id="">
                                            {/* <label htmlFor="email">Password:</label>
                                            <input type="password" className="form-control" id="pwd" /> */}
                                            <div className="input-group" >
                                                <div className="input-group-prepend">
                                                <span className="input-group-text" ><i className="fas fa-lock"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="Password"  name={"password"}  value={this.state.password} onChange={this.handleChange} required/>
                                                
                                            </div>
                                        </div>
                                        <small className="smalltext">Already have an account? <Link to="/signin"><span className="signintext">Sign in.</span></Link></small>
                                
                                        {
                                        !this.state.loading ?  
                                        <button type="submit" className="btn btn-outline button " onClick={this.submitForm} >Sign up</button> :
                                        
                                        <button className="btn btn-outline btn-sm  " id="btn-loading" disabled >
                                            <i className="fas fa-spinner fa-spin" />
                                        </button>
                                        }

                                         <div className="mt-3">
                                            <small className="mt-5">By clicking 'Sign up', you agree to our

                                                <a href="/."><span className="text-dark"> Terms of Service</span></a> &amp;

                                                <a href="/."><span className="text-dark"> Privacy Policy</span></a>.
                                            </small>
                                        </div>
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