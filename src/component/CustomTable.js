import React, { Component } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

class CustomTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md={4} />
        <Col md={4}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Email</th>
                <th>Password </th>
              </tr>
            </thead>
            <tbody>
              {this.props && this.props.data && this.props.data.length ? (
                this.props.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.email}</td>
                      <td>{item.pwd}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3">No data Avialable</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
        <Col md={4} />
      </Row>
    );
  }
}
export default CustomTable;
