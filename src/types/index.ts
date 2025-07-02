export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
}

export interface Brand {
  id: string;
  name: string;
  productId: string;
}

export interface SalesData {
  month: string;
  sales: number;
}

export interface BrandSalesData {
  brandId: string;
  brandName: string;
  salesData: SalesData[];
}

export interface MockData {
  categories: Category[];
  products: Product[];
  brands: Brand[];
  salesData: BrandSalesData[];
}

export interface SelectOption {
  value: string;
  label: string;
}
