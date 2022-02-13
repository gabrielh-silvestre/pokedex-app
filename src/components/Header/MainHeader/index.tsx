import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

// import { SearchBar } from '../../SearchBar';

import {
  HeaderContainer,
  ContentContainer,
  HeaderTitle,
  NavBar,
  LinkList,
  LinkItem,
  // SearchContainer,
} from './styes';

export function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <HeaderContainer>
      <ContentContainer>
        <Link to="/" className="flex items-center lg:col-start-1 lg:w-min">
          <HeaderTitle>Pokedex</HeaderTitle>
        </Link>
        <div className="lg:hidden">
          <Hamburger color="#f0f0f0" size={28} onToggle={handleToggle} />
        </div>
        <NavBar
          $isVisible={mobileMenu}
        >
          <LinkList>
            <LinkItem $first>
              <a
                href="https://www.pokemon.com/br/pokedex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pokedex Nintendo
              </a>
            </LinkItem>
            <LinkItem>
              <a
                href="https://github.com/gabrielh-silvestre"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </LinkItem>
            <LinkItem>
              <a
                href="https://www.linkedin.com/in/gabrielh-silvestre/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </LinkItem>
          </LinkList>
        </NavBar>
        {/* <SearchContainer $isVisible={mobileMenu} style={{ width: '183px' }}>
          <SearchBar />
        </SearchContainer> */}
      </ContentContainer>
    </HeaderContainer>
  );
}
