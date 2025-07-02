import React from 'react';
import {
  NativeSelect,
  chakra,
  type RecipeVariantProps,
} from '@chakra-ui/react';
import type { SelectOption } from '../../../types';
import { selectRecipe } from '../../../styles/slotRecipes/select.recipe';

const StyledSelect = chakra(NativeSelect.Root, selectRecipe);

type SelectVariantProps = RecipeVariantProps<typeof selectRecipe>;

export interface SelectProps extends SelectVariantProps {
  placeholder?: string;
  value?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  isDisabled?: boolean;
  'data-testid'?: string;
}

export const Select: React.FC<SelectProps> = ({
  placeholder = 'Selecione...',
  value,
  options,
  onChange,
  isDisabled = false,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <StyledSelect disabled={isDisabled} {...rest}>
      <NativeSelect.Field
        placeholder={placeholder}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        data-testid={testId}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </StyledSelect>
  );
};
