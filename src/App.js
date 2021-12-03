import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PokemonSinglePage from './pages/PokemonSinglePage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route
          path="/pokemon/:pokemonName"
          render={(props) => <PokemonSinglePage {...props} />}
        />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
