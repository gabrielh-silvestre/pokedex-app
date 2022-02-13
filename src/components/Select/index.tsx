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
        {options.map((value, i) => (
          <SelectOption
            key={value}
            value={value}
            $isSelected={optionSelected === value}
            onClick={() => {
              onClick(value);
            }}
          >
            {templateOption(value, i)}
          </SelectOption>
        ))}
      </SelectOptionContainer>
    </ContainerSelect>
  );
}
