import React, { PureComponent } from 'react';

import SideBar from '../shared/SideBar';
/**
 * ProfilePage
 */
export class ProfilePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }

  render() {
    const { match } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12 col-md-8">
           This is the Profile Page. The Profile id is: {match.params.id}
        </div>
        <SideBar />
      </div>
    );
  }
}

export default ProfilePage;
