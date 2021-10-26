import './App.css';
import Home from './pages/Home/Home';
import PokePageContainer from './components/PokePage_Components/PokePageContainer/PokePageContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:pokemonName" render={(props) => <PokePageContainer {...props}/>} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
