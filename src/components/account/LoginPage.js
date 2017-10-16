import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
/**
 * LoginPage
 */
export class LoginPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-7 col-md-5 col-lg-4">
          <Form>
           <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="noreply@musiclist.com" />
           </FormGroup>
           <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="password" />
           </FormGroup>
           <Button>Log In</Button>
          </Form>
        </div>
      </div>
    );
  }
}


export default LoginPage;
