import './App.css';
import PokeCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <PokeCard
        pokemonName="ditto"
        pokemonId={132}
        pokemonSprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        pokemonTypes={['normal']}
      />
      <PokeCard
        pokemonName="ditto"
        pokemonId={132}
        pokemonSprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        pokemonTypes={['normal']}
      />
    </div>
  );
}

export default App;
