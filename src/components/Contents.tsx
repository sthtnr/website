import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Home } from './Home';
import { Profile } from './Profile';
import { Works } from './Works';
import { Contact } from './Contact';
// import * as contentsStyles from '../style/contents.css';
import * as cardsStyles from '../style/cards.css';
import * as layoutStyles from '../style/layout.css';

export class Contents extends React.Component {
  render() {
    return (
      <div className={layoutStyles.contents}>
        <Container>
          <BrowserRouter>
            <Row>
              <Col>
                <Card border='dark' className={cardsStyles.cardProfile}>
                  <Link
                    to='/profile'
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    <Card.Body>
                      <Card.Subtitle>Profile</Card.Subtitle>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
              <Col>
                <Card border='dark' className={cardsStyles.cardWorks}>
                  <Link
                    to='/works'
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    <Card.Body>
                      <Card.Subtitle>Works</Card.Subtitle>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
              <Col>
                <Card border='dark' className={cardsStyles.cardContact}>
                  <Link
                    to='/contact'
                    style={{
                      textDecoration: 'none',
                      color: '#000',
                    }}
                  >
                    <Card.Body>
                      <Card.Subtitle>Contact</Card.Subtitle>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            </Row>

            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/works' component={Works} />
            <Route path='/contact' component={Contact} />
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}
