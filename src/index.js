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
import Curriculum from './components/curriculum.jsx'



ReactDOM.render(<BrowserRouter>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/signup" component={Signup}/>
                    <Route   path="/signin" component={Signin}/>
                    <Route  path="/contact" component={Contact}/>
                    <Route   path="/gallery" component={Gallery}/>
                    <Route   path="/curriculum" component={Curriculum}/>
                </div>
                </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
