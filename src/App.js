import './App.css';
import Header from './components/Header/Header';
import PokeCard from './components/PokemonCard/PokemonCard';

function App() {
  return (
    <div className="App">
      <Header />
      <article>
        <PokeCard />
      </article>
    </div>
  );
}

export default App;
