export interface Customer {
  id: string;
  tenantId: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  state: string | null;
  note: string | null;
  verified_email: boolean;
  tax_exempt: boolean;
  currency: string;
  admin_graphql_api_id: string;
  created_at: string;
  updated_at: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  first_name: string | null;
  last_name: string | null;
  company: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  province: string | null;
  country: string | null;
  zip: string | null;
  phone: string | null;
  name: string | null;
  province_code: string | null;
  country_code: string | null;
  country_name: string | null;
  is_default: boolean;
}

export interface Order {
  id: string;
  tenantId: string;
  shopify_id: string;
  email: string;
  name: string;
  note: string | null;
  currency: string;
  financial_status: string;
  fulfillment_status: string | null;
  order_number: number;
  total_price: string;
  subtotal_price: string;
  total_tax: string;
  total_discounts: string;
  created_at: string;
  updated_at: string;
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
  addresses: OrderAddress[];
}

export interface LineItem {
  id: string;
  title: string;
  name: string;
  sku: string | null;
  quantity: number;
  price: string;
  product_id: string | null;
}

export interface ShippingLine {
  id: string;
  title: string;
  price: string;
}

export interface OrderAddress {
  id: string;
  type: string;
  first_name: string | null;
  last_name: string | null;
  city: string | null;
  country: string | null;
}

export interface Product {
  id: string;
  tenantId: string;
  title: string;
  description: string | null;
  vendor: string | null;
  product_type: string | null;
  tags: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}