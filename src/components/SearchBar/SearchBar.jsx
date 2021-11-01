import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '../Button/Button';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      code: '',
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyUp({ code }) {
    this.setState({ code });
  }

  handleChange({ target }) {
    this.setState(() => ({
      searchTerm: target.value,
    }));
  }

  render() {
    const { searchTerm, code } = this.state;

    if (code === 'Enter') {
      return <Redirect to={`/pokemon/${searchTerm}`} />;
    }

    return (
      <>
        <input
          className="pl-2 rounded w-full"
          type="text"
          name="pokemon-name-input"
          id="pokemon-name-input"
          placeholder="Digite o nome ou id"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <Link to={`/pokemon/${searchTerm}`}>
          <Button
            className="px-4 text-lg bg-red-600 text-gray-100 font-bold rounded-md"
            btnContent="Search"
          />
        </Link>
      </>
    );
  }
}
