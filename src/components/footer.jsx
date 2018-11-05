import React, { Component } from 'react';
import '../css/footer.css';
import {Link} from 'react-router-dom';




class Footer extends Component {
  state = {
    email:'',
  }
  handleNewsletter=(e)=> {
   
    this.setState({
        email: e.target.value,
    });
    console.log(this.state.email)
  }

  submitNewsletter =()=> {
    if ( this.state.email !== "" ){
    const {email} = this.state   
    // alert(`You have successfully sign up for our newsletter ${email}`)
    localStorage.setItem(this.state.email,email)
      if(email){     
        alert(`You have successfully sign up for our newsletter ${email}`)
      }
    }else alert('Enter email to be able to sign up for our newsletter')
         
  }
  render() {
    return (
      <div className="footer">
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer-info ml-5">
                  <div className="section-title ">
                    <h2>Courses</h2>
                  </div>
                  <div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>React</p>
                  </div>
                  {/* <ul className="social-icon">
                    <li><a href="/" className="" attr="facebook icon" ><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="/" className="" ><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/" className="" ><i className="fab fa-instagram"></i></a></li>
                  </ul> */}
                  <div className="copyright-text"> 
                    {/* <p>Copyright © 2018 </p> */}
                    {/* <p>Design: <a rel="/" href="/" >Learn code</a></p> */}
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-info ">
                  <div className="section-title">
                    <h2>Contact Info</h2>
                  </div>
                  <div>
                    <p>+234 890 507 490,  0816 000 4569</p>
                    <p><a href="/">learncode@youremail.com</a></p>
                  </div>
                  <div className="footer_menu">
                    <h2>Quick Links</h2>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><Link to="/about">About</Link></li>
                      <li><a href="/">Terms &amp; Conditions</a></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-info newsletter-form ml-5">
                  <div className="section-title">
                    <h2>Newsletter Sign up</h2>
                  </div>
                  <div>
                    <div className="form-group">
                      <form >
                        <input type="email" className="form-control" placeholder="Enter your email" value={this.state.email} name={"email"} onChange={this.handleNewsletter} required />
                        <button type="button" className="form-control" name="submit" onClick= {this.submitNewsletter} >Submit</button> />
                      </form>
                      <span><sup>*</sup> Please note - we do not spam your email.</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 col-sm-6">
                <ul className="social-icon ml-5 ">
                      <li><a href="/" className="" attr="facebook icon" ><i className="fab fa-facebook-square"></i></a></li>
                      <li><a href="/" className="" ><i className="fab fa-twitter"></i></a></li>
                      <li><a href="/" className="" ><i className="fab fa-instagram"></i></a></li>
                      
                </ul> 
              </div>
              <div className="col-md-4 col-sm-6 copyright " > 

                <span >Copyright © 2018 </span>
                
              </div>

              <div className="col-md-4 col-sm-6 copyright " >     
                
                <span className="ml-5" style={{float:'left'}}>Design: <a  href="/" >Learncode</a></span>
              </div>
          </div>
                    
        </div>
      </footer>
    

        
        
      </div>
    );
  }
}

export default Footer;
