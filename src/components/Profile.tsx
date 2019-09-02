import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';

export class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Header>Personal Infomation</Card.Header>
            <br />
            <Card.Text>
              Age: 21
              <br />
              Birthday: August 2
            </Card.Text>
            <br />
            <Card.Header>My Skills</Card.Header>
            <br />
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Programming Language</Card.Subtitle>
                  <Card.Text>Go Python C JavaScript TypeScript</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Framework</Card.Subtitle>
                  <Card.Text>
                    React.js Next.js Vue.js Node.js Flask Django
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Other Technology</Card.Subtitle>
                  <Card.Text>AWS GCP MySQL PostgreSQL Docker GraphQL</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
