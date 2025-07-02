import { useMemo } from 'react';
import mockData from '../data/mockData.json';
import type {
  MockData,
  Category,
  Product,
  Brand,
  BrandSalesData,
  SelectOption,
} from '../types';

export const useData = () => {
  const data = mockData as MockData;

  const {
    categoriesMap,
    productsMap,
    brandsMap,
    salesDataMap,
    productsByCategory,
    brandsByProduct,
  } = useMemo(() => {
    const categoriesMap = new Map<string, Category>(
      data.categories.map(cat => [cat.id, cat])
    );
    const productsMap = new Map<string, Product>(
      data.products.map(prod => [prod.id, prod])
    );
    const brandsMap = new Map<string, Brand>(
      data.brands.map(brand => [brand.id, brand])
    );
    const salesDataMap = new Map<string, BrandSalesData>(
      data.salesData.map(sale => [sale.brandId, sale])
    );

    const productsByCategory = data.products.reduce((acc, product) => {
      const categoryProducts = acc.get(product.categoryId) || [];
      categoryProducts.push({ value: product.id, label: product.name });
      acc.set(product.categoryId, categoryProducts);
      return acc;
    }, new Map<string, SelectOption[]>());

    const brandsByProduct = data.brands.reduce((acc, brand) => {
      const productBrands = acc.get(brand.productId) || [];
      productBrands.push({ value: brand.id, label: brand.name });
      acc.set(brand.productId, productBrands);
      return acc;
    }, new Map<string, SelectOption[]>());

    return {
      categoriesMap,
      productsMap,
      brandsMap,
      salesDataMap,
      productsByCategory,
      brandsByProduct,
    };
  }, [data]); // Depende de `data`, que é estático neste caso.

  // A lista de categorias para o seletor é calculada uma vez.
  const categories = useMemo(
    (): SelectOption[] =>
      data.categories.map(category => ({
        value: category.id,
        label: category.name,
      })),
    [data.categories]
  );

  return useMemo(
    () => ({
      categories,
      getProductsByCategory: (categoryId: string): SelectOption[] =>
        productsByCategory.get(categoryId) || [],
      getBrandsByProduct: (productId: string): SelectOption[] =>
        brandsByProduct.get(productId) || [],
      getSalesDataByBrand: (brandId: string): BrandSalesData | undefined =>
        salesDataMap.get(brandId),
      getCategoryName: (categoryId: string): string =>
        categoriesMap.get(categoryId)?.name || '',
      getProductName: (productId: string): string =>
        productsMap.get(productId)?.name || '',
      getBrandName: (brandId: string): string =>
        brandsMap.get(brandId)?.name || '',
    }),
    [
      categories,
      productsByCategory,
      brandsByProduct,
      salesDataMap,
      categoriesMap,
      productsMap,
      brandsMap,
    ]
  );
};
