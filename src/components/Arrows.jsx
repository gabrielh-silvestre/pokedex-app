import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Arrows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftArrow: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ),
      rightArrow: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      ),
      nextPokemon: undefined,
      prevPokemon: undefined,
    };

    this.setNextPokemon = this.setNextPokemon.bind(this);
    this.setPrevPokemon = this.setPrevPokemon.bind(this);
  }

  setNextPokemon() {
    const { actualPokemon } = this.props;
    this.setState(() => {
      if (actualPokemon < 898) {
        return { nextPokemon: actualPokemon + 1 };
      }
      return { nextPokemon: actualPokemon };
    });
  }

  setPrevPokemon() {
    const { actualPokemon } = this.props;
    this.setState(() => {
      if (actualPokemon > 1) {
        return { prevPokemon: actualPokemon - 1 };
      }
      return { prevPokemon: actualPokemon };
    });
  }

  componentDidMount() {
    this.setNextPokemon();
    this.setPrevPokemon();
  }

  render() {
    const { arrow, className } = this.props;
    const { rightArrow, leftArrow, nextPokemon, prevPokemon } = this.state;

    return arrow === 'right' ? (
      <Link className={className} to={`/pokemon/${nextPokemon}`}>
        {rightArrow}
      </Link>
    ) : (
      <Link className={className} to={`/pokemon/${prevPokemon}`}>
        {leftArrow}
      </Link>
    );
  }
}
