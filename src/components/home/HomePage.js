import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';

import SideBar from '../shared/SideBar';
/**
 * Home
 */
const showAlert = () => {
  alert('You Have clicked on the button you fucktard');
};
export class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
           This is the home page

           <Button onClick={showAlert}>Click Me</Button>
          </div>
          <SideBar />
        </div>
      </div>
    );
  }
}

export default HomePage;
