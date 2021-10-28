import './App.css';
import Home from './pages/Home/Home';
import PokemonSinglePage from './pages/PokemonSinglePage/PokemonSinglePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
