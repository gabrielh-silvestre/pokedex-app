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
      <header>
        <div className="container">
          <div className="header-title">
            <Link to="/">
              <h1>Pokedex</h1>
            </Link>
          </div>
          <Hamburger color="#f0f0f0" size="28" onToggle={this.handleMenu} />
          <nav className="header-menu" style={{display: this.state.mobileMenu}}>
            <ul>
              <li>
                <a
                  href="https://www.pokemon.com/br/pokedex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokedex Nintendo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gabrielh-silvestre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
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
