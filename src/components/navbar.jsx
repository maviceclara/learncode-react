import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';



class Navbar extends Component{
 
    logoutUser = () => {
      localStorage.clear()
      return (this.props.history.push('/')) 
    }
    render(){

      const loggedin = (<div><li className="nav-item" style={{float:'left'}}>
          <Link to="/" className="nav-link" onClick={this.logoutUser} >Log out</Link>
        </li> 
        <li className="nav-item" style={{float:'right'}}>
          <Link to="/signin" className="nav-link"  ><img src={require('../img/avatar.jpg')} alt="avatar" classname="avatar" style={{borderRadius:'50%',width:'30px',height:'30px'}}/></Link>
        </li>
        </div> )
      const noLoggedin = (
          <div>
            <li className="nav-item" style={{float:'left'}}>
                <Link to="/signup" className="nav-link"  >Sign up</Link>
              </li> 
            <li className="nav-item" style={{float:'right'}}>
              <Link to="/signin" className="nav-link"  >Sign in</Link>
            </li> 
          </div>)
        return <div>
            <div className="header navbar-style">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light" >
                  <a className="navbar-brand brand-name" href="/"> 
                  <h2 className="brand">LearnCode</h2></a>   
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarResponsive">
                    <span className="navbar-menu" >Menu </span>
                  </button> 
                  <div className="collapse navbar-collapse" id="navBarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item  ">
                        <Link className="nav-link " to="/">Home</Link>
                      </li>  
                      <li className="nav-item">
                        <Link className="nav-link " to="/about">About</Link>
                      </li>  
                      <li className="nav-item">
                        <Link to="/#course"className="nav-link">Courses</Link>
                      </li>  
                      <li className="nav-item">
                        <a href="/#contact" className="nav-link">Contact</a>
                      </li>
                      {localStorage.getItem('auth') === null ? noLoggedin : loggedin}
                      
                    
                    </ul>
                  </div>
                </nav>          
              </div> 
            </div>
          


        </div>
    }
}


export default Navbar;