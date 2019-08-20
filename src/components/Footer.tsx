import React from 'react';

interface FooterProps {
  licence: string;
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <footer>
        <h2>{this.props.licence}</h2>
        <h2>ここはfooterだよ</h2>
      </footer>
    );
  }
}
