import React, { Component } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleMenu = this.handleMenu.bind(this);

    this.state = {
      mobileMenu: 'none',
    };
  }

  handleMenu(toggled) {
    toggled
      ? this.setState({ mobileMenu: 'block' })
      : this.setState({ mobileMenu: 'none' });
  }

  render() {
    return (
      <header className="bg-red-600 py-4">
        <div className="flex justify-between px-4 sm:container mx-auto">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-4xl text-gray-100">Pokedex</h1>
            </Link>
          </div>
          <Hamburger color="#f0f0f0" size="28" onToggle={this.handleMenu} />
          <nav className="bg-red-600 p-4 absolute right-0 top-20 rounded-bl-lg" style={{display: this.state.mobileMenu}}>
            <ul className="text-lg text-right text-gray-100">
              <li className="my-2">
                <a
                  href="https://www.pokemon.com/br/pokedex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokedex Nintendo
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://github.com/gabrielh-silvestre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.linkedin.com/in/gabrielh-silvestre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
