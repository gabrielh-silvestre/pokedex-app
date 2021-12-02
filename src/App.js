import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PokemonSinglePage from './pages/PokemonSinglePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:pokemonName" render={(props) => <PokemonSinglePage {...props}/>} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
