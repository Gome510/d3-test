import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import data from "/public/assets/data/examples.json";
//FIXME: examples.json to update example grid

function ExamplesGrid({ count }) {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Array(4)
        .fill(0)
        .map((_, id) => (
          <ExampleCard key={id} />
        ))}
    </Row>
  );
}

export default ExamplesGrid;

function ExampleCard() {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
