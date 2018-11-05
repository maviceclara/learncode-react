import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import Signup from './components/signup.jsx'
import Signin from './components/signin.jsx'
import Contact from './components/contact.jsx'
import Gallery from './components/gallery.jsx'
import About from './components/about.jsx'
import Singlecourse from './components/singlecourse.jsx';
import Singlelesson from './components/singlelesson.jsx';


ReactDOM.render(<BrowserRouter>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/gallery" component={Gallery}/>
                    {/* <Route path="/home" component={Home}/> */}
                    <Route exact  path="/courses/:id" component={Singlecourse}/>
                    <Route   path="/courses/:id/:lesson" component={Singlelesson}/>

                </div>
                </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
