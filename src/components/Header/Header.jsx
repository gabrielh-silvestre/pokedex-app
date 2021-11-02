import React, { Component } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleMenu = this.handleMenu.bind(this);

    this.state = {
      mobileMenu: 'none',
      mobileBar: '183px'
    };
  }

  handleMenu(toggled) {
    toggled
      ? this.setState({ mobileMenu: 'flex' })
      : this.setState({ mobileMenu: 'none' });
  }

  componentDidMount() {
    if (window.innerWidth >= 1024) {
      this.setState({ mobileMenu: 'flex', mobileBar: '' });
    };
  }

  render() {
    const { mobileBar, mobileMenu } = this.state;

    return (
      <header className="bg-red-600 z-20 py-4 sticky top-0 lg:py-2">
        <div className="flex justify-between px-4 mx-auto lg:px-24 xl:w-4/5 xl:mx-auto lg:grid">
          <div className="flex items-center lg:col-start-1 lg:w-min">
            <Link to="/">
              <h1 className="text-4xl text-gray-100">Pokedex</h1>
            </Link>
          </div>
          <div className="lg:hidden">
            <Hamburger color="#f0f0f0" size="28" onToggle={this.handleMenu} />
          </div>
          <nav
            className="bg-red-600 p-4 pt-7 absolute right-0 top-20 rounded-bl-lg hidden lg:flex lg:items-center lg:static lg:col-start-2 lg:pt-4 lg:mx-8"
            style={{ display: mobileMenu }}
          >
            <ul className="text-lg text-right text-gray-100 lg:flex">
              <li className="my-2">
                <a
                  href="https://www.pokemon.com/br/pokedex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokedex Nintendo
                </a>
              </li>
              <li className="my-2 lg:ml-5">
                <a
                  href="https://github.com/gabrielh-silvestre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="my-2 lg:ml-5">
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
          <div className="absolute right-0 top-20 overflow-hidden lg:static lg:flex lg:items-center lg:justify-end lg:col-start-3 lg:w-full" style={{ display: mobileMenu, width: mobileBar }}>
            <SearchBar />
          </div>
        </div>
      </header>
    );
  }
}
