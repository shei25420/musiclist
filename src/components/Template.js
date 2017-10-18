import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './shared/Header';
import HomePage from './home/HomePageContainer';
import ProfilePage from './account/ProfilePage';
import LoginPage from './account/LoginPage';
/**
 * Template
 */
export class Template extends PureComponent { // eslint-disable-line react/prefer-stateless-function
 constructor(props){
   super(props)
 }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header username="anonymous" />
          <p>{this.props.progress}</p>
          <section className="page-content container-fluid">
            <Route exact path="/" component={HomePage} />
            <Route path="/account/profile/:id" component={ProfilePage} />
            <Route path="/account/login" component={LoginPage} />
          </section>
        </div>
      </Router>
    );
  }
}

export default Template;
