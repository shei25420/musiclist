import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';
/**
 * Header
 */
export class Header extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    const { username } = this.props;
    return (
      <header>
        <h1>Music List</h1>
        <div className="user-menu">
          <h2>Welcome { username }</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <br />
                <Link to="/account/profile/adasdadw">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
