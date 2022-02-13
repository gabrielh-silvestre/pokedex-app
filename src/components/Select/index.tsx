import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import {
  ContainerSelect,
  SelectOptionContainer,
  SelectLabel,
  SelectOption,
} from './styles';

interface SelectProps {
  label: string;
  options: string[];
  optionSelected: string;
  templateOption: (optItem: string, optIndex: number) => string;
  onClick: (value: string) => void;
}

export function Select({
  label,
  options,
  optionSelected,
  templateOption,
  onClick,
}: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);

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
            $isSelected={optionSelected === name}
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
