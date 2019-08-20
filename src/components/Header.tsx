import React from 'react';

interface HeaderProps {
  title: string;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <h2>ここはheaderだよ</h2>
      </header>
    );
  }
}
