import React, { Component } from 'react';
import Pokedex from '../../components/Pokedex/Pokedex';
import Header from '../../components/Header/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pokedex />
      </div>
    );
  }
}
