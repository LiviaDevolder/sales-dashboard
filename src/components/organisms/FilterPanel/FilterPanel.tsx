import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { SelectField } from '../../molecules';
import type { SelectOption } from '../../../types';

export interface FilterConfig {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  isDisabled?: boolean;
}

interface FilterPanelProps {
  filters: FilterConfig[];
  'data-testid'?: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  'data-testid': testId,
}) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: filters.length }}
      gap={6}
      data-testid={testId}
    >
      {filters.map(filter => (
        <SelectField
          key={filter.id}
          label={filter.label}
          placeholder={filter.placeholder}
          value={filter.value}
          options={filter.options}
          onChange={filter.onChange}
          isDisabled={filter.isDisabled}
          data-testid={`${filter.id}-select`}
        />
      ))}
    </SimpleGrid>
  );
};
