import React, { PureComponent } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './shared/Header';
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';
/**
 * Template
 */
export class Template extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header username="anonymous" />
          <Route exact path="/" component={HomePage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
        </div>
      </Router>
    );
  }
}

export default Template;
