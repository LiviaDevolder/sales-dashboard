import { useReducer, useMemo, useCallback, useEffect } from 'react';
import { useData } from './useData';
import type { SelectOption, BrandSalesData } from '../types';

interface FilterState {
  selectedCategory: string;
  selectedProduct: string;
  selectedBrand: string;
  salesData?: BrandSalesData;
}

type FilterAction =
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_PRODUCT'; payload: string }
  | { type: 'SET_BRAND'; payload: string }
  | { type: 'SET_SALES_DATA'; payload?: BrandSalesData };

const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case 'SET_CATEGORY':
      if (action.payload === state.selectedCategory) return state;
      return {
        ...state,
        selectedCategory: action.payload,
        selectedProduct: '',
        selectedBrand: '',
        salesData: undefined,
      };

    case 'SET_PRODUCT':
      if (action.payload === state.selectedProduct) return state;
      return {
        ...state,
        selectedProduct: action.payload,
        selectedBrand: '',
        salesData: undefined,
      };

    case 'SET_BRAND':
      if (action.payload === state.selectedBrand) return state;
      return {
        ...state,
        selectedBrand: action.payload,
      };

    case 'SET_SALES_DATA':
      return {
        ...state,
        salesData: action.payload,
      };

    default:
      return state;
  }
};

const initialState: FilterState = {
  selectedCategory: '',
  selectedProduct: '',
  selectedBrand: '',
  salesData: undefined,
};

export const useFilters = () => {
  const {
    categories,
    getProductsByCategory,
    getBrandsByProduct,
    getSalesDataByBrand,
    getCategoryName,
    getProductName,
    getBrandName,
  } = useData();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const productOptions: SelectOption[] = useMemo(() => {
    return state.selectedCategory
      ? getProductsByCategory(state.selectedCategory)
      : [];
  }, [state.selectedCategory, getProductsByCategory]);

  const brandOptions: SelectOption[] = useMemo(() => {
    return state.selectedProduct
      ? getBrandsByProduct(state.selectedProduct)
      : [];
  }, [state.selectedProduct, getBrandsByProduct]);

  useEffect(() => {
    if (state.selectedBrand) {
      const data = getSalesDataByBrand(state.selectedBrand);
      dispatch({ type: 'SET_SALES_DATA', payload: data });
    } else {
      dispatch({ type: 'SET_SALES_DATA', payload: undefined });
    }
  }, [state.selectedBrand, getSalesDataByBrand]);

  const handleCategoryChange = useCallback((value: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: value });
  }, []);

  const handleProductChange = useCallback((value: string) => {
    dispatch({ type: 'SET_PRODUCT', payload: value });
  }, []);

  const handleBrandChange = useCallback((value: string) => {
    dispatch({ type: 'SET_BRAND', payload: value });
  }, []);

  const chartTitle = useMemo(() => {
    if (
      !state.selectedBrand ||
      !state.selectedProduct ||
      !state.selectedCategory
    ) {
      return 'Vendas por mês para:';
    }

    const categoryName = getCategoryName(state.selectedCategory);
    const productName = getProductName(state.selectedProduct);
    const brandName = getBrandName(state.selectedBrand);

    return `Vendas por mês para: ${categoryName} > ${productName} > ${brandName}`;
  }, [
    state.selectedCategory,
    state.selectedProduct,
    state.selectedBrand,
    getCategoryName,
    getProductName,
    getBrandName,
  ]);

  const hasValidSelection = useMemo(() => {
    return !!state.selectedBrand && !!state.salesData;
  }, [state.selectedBrand, state.salesData]);

  return {
    selectedCategory: state.selectedCategory,
    selectedProduct: state.selectedProduct,
    selectedBrand: state.selectedBrand,

    categoryOptions: categories,
    productOptions,
    brandOptions,

    handleCategoryChange,
    handleProductChange,
    handleBrandChange,

    salesData: state.salesData,
    chartTitle,
    hasValidSelection,
  };
};
