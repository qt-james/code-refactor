import React from "react";
import TodoList from "../components/TodoList/TodoList";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

function Refactored() {
  return (
    <Row className="justify-content-center">
      <Col className="col-md-8">
        <Card>
          <CardBody>
            <CardTitle tag="h3" className="display-6 mb-3">
              Todo List
            </CardTitle>
            <TodoList />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Refactored;
