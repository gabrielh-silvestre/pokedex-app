import './App.css';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { PokemonSinglePage } from './pages/PokemonSinglePage';
import { Favorites } from './pages/Favorites';
import { Header } from './components/Header';

function App() {
  return (
    <div className="h-screen">
      <Header />

      <Switch>
        <Route
          path="/pokemon/:pokemonId"
          component={ PokemonSinglePage }
        />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
