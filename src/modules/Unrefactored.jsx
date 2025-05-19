import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Input, Row } from "reactstrap";
import UTodoList from "../components/UnrefactoredTodoList/UTodoList.jsx";
function Unrefactored() {
 

  return (
    <Row className="justify-content-center">
      <Col className="col-md-8">
        <Card>
          <CardBody>
            <CardTitle tag="h3" className="display-6 mb-3">
              Todo List
            </CardTitle>
          </CardBody>
          <UTodoList />
        </Card>
      </Col>
    </Row>
  );
}

export default Unrefactored;
