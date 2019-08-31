import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Contents } from './Contents';
import * as layoutStyles from '../style/layout.css';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className={layoutStyles.contents}>
          <Contents />
        </div>
      </div>
    );
  }
}
