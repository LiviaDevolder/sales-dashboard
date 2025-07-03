import React from 'react';
import { Box, Container, VStack } from '@chakra-ui/react';
import { Header, FilterPanel } from '../../organisms';
import { ChartSection } from '../../molecules';
import { useFilters } from '../../../hooks/useFilters';
import type { SelectOption } from '../../../types';

interface FilterConfig {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  isDisabled?: boolean;
  'data-testid'?: string;
}

export const DashboardTemplate: React.FC = () => {
  const {
    selectedCategory,
    selectedProduct,
    selectedBrand,
    categoryOptions,
    productOptions,
    brandOptions,
    handleCategoryChange,
    handleProductChange,
    handleBrandChange,
    salesData,
    chartTitle,
    hasValidSelection,
  } = useFilters();

  const filters: FilterConfig[] = [
    {
      id: 'category',
      label: 'Categoria',
      placeholder: 'Selecione uma categoria',
      value: selectedCategory,
      options: categoryOptions,
      onChange: handleCategoryChange,
      'data-testid': 'category-select',
    },
    {
      id: 'product',
      label: 'Produto',
      placeholder: 'Selecione um produto',
      value: selectedProduct,
      options: productOptions,
      onChange: handleProductChange,
      isDisabled: !selectedCategory,
      'data-testid': 'product-select',
    },
    {
      id: 'brand',
      label: 'Marca',
      placeholder: 'Selecione uma marca',
      value: selectedBrand,
      options: brandOptions,
      onChange: handleBrandChange,
      isDisabled: !selectedProduct,
      'data-testid': 'brand-select',
    },
  ];

  return (
    <Box minH="100vh" bg="gray.50">
      <Header userName="User Name" />

      <Container maxW="7xl" py={8}>
        <VStack gap={8} align="stretch">
          <FilterPanel filters={filters} />

          {hasValidSelection && salesData && (
            <ChartSection title={chartTitle} data={salesData.salesData} />
          )}
        </VStack>
      </Container>
    </Box>
  );
};
