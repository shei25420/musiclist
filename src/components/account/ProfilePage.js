import React, { PureComponent } from 'react';

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
      <section className="page-content">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
           This is the Profile Page. The Profile id is: {match.params.id}
          </div>
          <aside className="col-sm-12 col-lg-4">
           This is the profile page sidebar
          </aside>
        </div>
      </section>
    );
  }
}

export default ProfilePage;
