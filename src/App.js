import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PokemonSinglePage from './pages/PokemonSinglePage';

function App() {
  return (
    <Switch>
      <Route
        path="/pokemon/:pokemonName"
        render={(props) => <PokemonSinglePage {...props} />}
      />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
