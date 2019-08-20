import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {}

export class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div>
        <Header title='TypeScript&React App' />
        <Footer licence='MIT' />
      </div>
    );
  }
}
