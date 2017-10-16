import React, { PureComponent } from 'react';

/**
 * Home
 */
export class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
           This is the home page fuckadsadas
            </div>
            <aside className="col-sm-12 col-md-4">
           This is the siderbar
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
