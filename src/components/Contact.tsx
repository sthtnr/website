import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';

interface ContactProps {}

export class Contact extends React.Component<ContactProps> {
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Header>Contact</Card.Header>
            <br />
            <Row>
              <Col>
                <Card.Subtitle>Mail</Card.Subtitle>
                <Card.Link href='mailto:sthtnr@gmail.com'>
                  sthtnr@gmail.com
                </Card.Link>
              </Col>
              <Col>
                <Card.Subtitle>GitHub</Card.Subtitle>
                <Card.Link href='https://github.com/sthtnr'>sthtnr</Card.Link>
              </Col>
              <Col>
                <Card.Subtitle>Twitter</Card.Subtitle>
                <Card.Link href='https://twitter.com/sthtnr'>@sthtnr</Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
