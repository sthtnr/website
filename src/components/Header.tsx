import React from 'react';

interface HeaderProps {
  title: string;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <header>ここはheaderだよ</header>
      </div>
    );
  }
}
