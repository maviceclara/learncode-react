import React from 'react';
import '../css/signin.css';
import {Link} from 'react-router-dom';
import axios from 'axios'



class Signin extends React.Component {
    constructor() {
        super()
      
        this.state = {
                  identifier:'',
                  password:'',
                  loading: false
        }
      }

      handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      
      handleSubmit = (e) => {
          e.preventDefault();
        let loginDetails = {
          identifier: this.state.identifier,
          password: this.state.password
        }
          this.setState({
            loading:true
          })


          let registeredUser = axios.post('https://staging-api.mentortemple.com/auth/local', loginDetails)
            registeredUser.then((response)=> {
                if(response.status === 200) {
                    console.log('success')
                    localStorage.setItem('auth', JSON.stringify(response.data))
                this.setState({
                    loading:false
                })
                return (this.props.history.push('/')) 
                }
                
            }).catch((error)=>{
                console.log(error.response.data.message)
                this.setState({
                    
                serverErrors: error.response.data.message,
                loading:false
                })
                setTimeout(()=>{
                this.setState({
                    serverErrors:'',
                    identifier:'',
                    password:'',
                })
                },3000);

  })

        }
      
    render(){
        return(
            <div className="user">
                <div className="container">
                    <h4 className="text-center pt-5 signText">Sign in</h4>
                    <div className="row">
                        
                        <div className="col-md-12 col-sm-12">
                            <div className="form">
                                <form>
                                    <div className="form-group formdiv" id="">
                                        <div className="errorMessage">{this.state.serverErrors}</div>
                                        {/* <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" id="email" /> */}
                                        <div className="input-group mb-3" >
                                            <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Email"  name={"identifier"} value={this.state.identifier} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <div className="form-group" id="">
                                        {/* <label htmlFor="email">Password:</label>
                                        <input type="password" className="form-control" id="pwd" /> */}
                                        <div className="input-group" >
                                            <div className="input-group-prepend">
                                            <span className="input-group-text" ><i className="fas fa-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Password"   name={"password"} value={this.state.password} onChange={this.handleInputChange} required/>
                                        </div>
                                    </div>
                                    <small className="text-center">Don't have an account? <Link to="/signup"><span className="signintext">Create one.</span></Link></small>
                                    {
                                        !this.state.loading ?  
                                        <button type="submit" className="btn btn-outline button " onClick={this.handleSubmit}>Sign in</button> :
                                        
                                        <button className="btn btn-outline btn-sm  " id="btn-loading"  >
                                            <i className="fas fa-spinner fa-spin" />
                                        </button>
                                        }


                                     <div className="mt-3 text-center">
                                        <small className="mt-5">By clicking 'Sign in', you agree to our

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

export default Signin;