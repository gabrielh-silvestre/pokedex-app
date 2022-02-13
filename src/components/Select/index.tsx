import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

import {
  ContainerSelect,
  SelectOptionContainer,
  SelectLabel,
  SelectOption,
} from './styles';

interface SelectProps {
  label: string;
  options: string[];
  templateOption: (optItem: string, optIndex: number) => string;
  onClick: (value: string) => void;
}

type Params = {
  pokemonId: string;
  searchOpt: string;
}

export function Select({
  label,
  options,
  templateOption,
  onClick,
}: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const slug = useParams<Params>();

  return (
    <ContainerSelect
      onMouseOver={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      <SelectLabel
        type="button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {label}
        <HiChevronDown className="w-5 h-5" />
      </SelectLabel>

      <SelectOptionContainer $isVisible={isVisible}>
        {options.map((name, i) => (
          <SelectOption
            key={name}
            value={name}
            $isSelected={!slug.pokemonId && slug.searchOpt === name}
            onClick={() => {
              onClick(name);
            }}
          >
            {templateOption(name, i)}
          </SelectOption>
        ))}
      </SelectOptionContainer>
    </ContainerSelect>
  );
}
