import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import CustomTable from "./CustomTable";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: "",
      pwd: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let { email, pwd } = e.target;
    let data = this.state.data;
    data.push({ email: email.value, pwd: pwd.value });

    this.setState({ data });
    console.log(e.target.email.value);
  };

  render() {
    return (
      <div>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <h1 align="center">UserForm</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="pwd"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <div align="center">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={4} />
        </Row>
        <br />
        <CustomTable data={this.state.data} />
      </div>
    );
  }
}
export default UserForm;
