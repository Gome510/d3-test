import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import data from "/src/assets/data/examples.json";
import { Link } from "react-router-dom";
//FIXME: examples.json to update example grid

function ExamplesGrid() {
  return (
    <>
      <h2 className="mb-0">React Examples</h2>
      <p>
        <em>
          Courtesy of{" "}
          <a href="https://2019.wattenberger.com/blog/react-and-d3">
            Amelia Wattenberger
          </a>
        </em>
      </p>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {data.map((exampleData, id) => (
          <ExampleCard key={id} data={exampleData} />
        ))}
      </Row>
    </>
  );
}

export default ExamplesGrid;

function ExampleCard({ data }) {
  return (
    <Link to={data.url} className="link-unstyled">
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.thumbnail} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
}
