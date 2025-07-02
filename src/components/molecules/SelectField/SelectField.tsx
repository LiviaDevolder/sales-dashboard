import React from 'react';
import { Field } from '@chakra-ui/react';
import { Select, type SelectProps } from '../../atoms/Select';
import type { SelectOption } from '../../../types';

interface SelectFieldProps extends Omit<SelectProps, 'options'> {
  label: string;
  options: SelectOption[];
  'data-testid'?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  value,
  options,
  onChange,
  isDisabled = false,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <Field.Root data-testid={testId} disabled={isDisabled} {...rest}>
      <Field.Label>{label}</Field.Label>
      <Select
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        isDisabled={isDisabled}
      />
    </Field.Root>
  );
};
