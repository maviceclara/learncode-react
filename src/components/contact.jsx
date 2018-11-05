import React, { Component } from 'react';
import '../css/contact.css'



class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            message:'',
            success:'',
            nameError:'',
            emailError:'',
            messageError:''

        }
    }

    handleChange =(e)=> {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit=()=> {
        if (this.state.name|| this.state.email || this.state.message!== "" ){
       let contactDetails=  {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            
          }
        
      localStorage.setItem(this.state.email, contactDetails)
      if(contactDetails){
          this.setState({
            success: 'You message has been received successfully.' ,
            name:'',
            email:'',
            message:''
          })

          setTimeout(()=> {
            this.setState({
            success:'',
            name:'',
            email:'',
            message:''
            })
          },3000)

         
      } 
     } else this.setState({
        nameError:'Name is required',
        emailError:'Email is required',
        messageError:'Please input a message',
        name:'',
        email:'',
        message:''
       })
       setTimeout(()=> {
        this.setState({
            nameError:'',
            emailError:'',
            messageError:'', name:'',
            email:'',
            message:''
         
        })
      },3000)

    }



    render(){
        return(
            <section id="contact">
                <div className="container contactcon">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <form id="contact-form"  >
                                <div className="sectiontitle">

                                 <h2>Contact us <small>we love conversations. lets talk!</small></h2>

                                </div>

                                <div className="col-md-12 col-sm-12">

                                    <input type="text" className="form-control" placeholder="Full name" name={"name"} required  value={this.state.name} onChange={this.handleChange}/>

                                    <div className="errorMessage">{this.state.nameError}</div>
                                    
                                    <input type="email" className="form-control" placeholder="Email address" name={"email"} required value={this.state.email} onChange={this.handleChange}/>

                                    <div className="errorMessage">{this.state.emailError}</div>

                                    <textarea className="form-control" rows={6} placeholder="Tell us about your message" name="message" required value={this.state.message} onChange={this.handleChange}/>

                                    <div className="errorMessage">{this.state.messageError}</div>
                                </div>

                                <div className="col-md-4 col-sm-12">
                                    <button type="button" className="form-control" name="send message"   onClick={this.handleSubmit} >submit</button>
                                </div>

                                <p className="mt-5  text-success" style={{fontWeight:'800'}}>{this.state.success}</p>
                            </form>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="contact-image">
                                {/* <img src={require('../img/contact-image.jpg')} className="" alt="Smiling Two Girls" /> */}
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        )
    }
}

export default Contact;