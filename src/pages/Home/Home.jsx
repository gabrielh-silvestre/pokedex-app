import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}
