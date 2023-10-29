import React from "react";
import DashboardPreview from "../../components/DashboardPreview";
import ExamplesGrid from "../../components/ExamplesGrid";
import { Container } from "react-bootstrap";

//TODO: github pages, own examples, hide dashboard preview

function HomePage() {
  return (
    <Container>
      <ExamplesGrid />
    </Container>
  );
}

export default HomePage;
