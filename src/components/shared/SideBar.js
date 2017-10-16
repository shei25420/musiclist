import React, { PureComponent } from 'react';
import { Card, CardBlock, CardText } from 'reactstrap';

/**
 * SideBar
 */
export class SideBar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <aside className="col-sm-12 col-md-4">
        <Card>
          <CardBlock>
            <CardText>
              This is the siderbar
            </CardText>
          </CardBlock>
        </Card>
      </aside>
    );
  }
}


export default SideBar;
