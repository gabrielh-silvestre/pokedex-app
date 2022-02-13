import './App.css';
import { Route, Switch } from 'react-router-dom';

import { DinamicList } from './pages/DinamicList';
import { StaticList } from './pages/StaticList';
import { PokemonSinglePage } from './pages/PokemonSinglePage';
import { Favorites } from './pages/Favorites';
import { Header } from './components/Header/MainHeader';

function App() {
  return (
    <div className="h-screen">
      <Header />

      <Switch>
        <Route
          path="/pokemon/:pokemonId"
          component={ PokemonSinglePage }
        />
        <Route path="/searchBy/:searchOpt" component={ StaticList } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/" component={DinamicList} />
      </Switch>
    </div>
  );
}

export default App;
