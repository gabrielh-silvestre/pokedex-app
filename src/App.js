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
        pokemonName="squirtle"
        pokemonId={7}
        pokemonSprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        pokemonTypes={['water']}
      />
    </div>
  );
}

export default App;
