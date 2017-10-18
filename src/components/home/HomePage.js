import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';

import SideBar from '../shared/SideBar';
/**
 * Home
 */
export class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)

  }

  render() {
    const {increamentFunction, decreamentFunction} = this.props

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
          <Button onClick={increamentFunction}>Increament</Button>
          &nbsp;
          <Button onClick={decreamentFunction}>Decreament</Button>
          </div>
          <SideBar />
        </div>
      </div>
    );
  }
}

export default HomePage;
