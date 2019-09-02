import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';

interface WorksProps {}

export class Works extends React.Component<WorksProps> {
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Header>Works</Card.Header>
            <br />
            <Card.Link href='https://github.com/sthtnr'>
              See my GitHub!
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
