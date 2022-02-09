interface PokemonPhysicalProps {
  height: number;
  weight: number;
  ability: string;
}

export function PokemonPhysical({
  height,
  weight,
  ability,
}: PokemonPhysicalProps) {
  return (
    <>
      <div className="mb-5">
        <h3 className="text-xl tracking-wider text-gray-100 mb-1">Height</h3>
        <p className="text-lg">{height} m</p>
      </div>

      <div className="mb-5">
        <h3 className="text-xl tracking-wider text-gray-100 mb-1">Weight</h3>
        <p className="text-lg">{(weight / 10).toFixed(1)} Kg</p>
      </div>

      <div>
        <h3 className="text-xl tracking-wider text-gray-100 mb-1">Ability</h3>
        <p className="text-lg">{ability}</p>
      </div>
    </>
  );
}