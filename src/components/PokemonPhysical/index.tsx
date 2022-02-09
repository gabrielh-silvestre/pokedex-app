import { PhysicalContainer, PhysicalType, PhysicalValue } from './styles';

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
      <PhysicalContainer>
        <PhysicalType>Height</PhysicalType>
        <PhysicalValue>{height} m</PhysicalValue>
      </PhysicalContainer>

      <PhysicalContainer>
        <PhysicalType>Weight</PhysicalType>
        <PhysicalValue>{(weight / 10).toFixed(1)} Kg</PhysicalValue>
      </PhysicalContainer>

      <PhysicalContainer>
        <PhysicalType>Ability</PhysicalType>
        <PhysicalValue>{ability}</PhysicalValue>
      </PhysicalContainer>
    </>
  );
}
