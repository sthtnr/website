import React from 'react';

interface FooterProps {
  licence: string;
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <div>
        <h2>{this.props.licence}</h2>
        <footer>ここはfooterだよ</footer>
      </div>
    );
  }
}
