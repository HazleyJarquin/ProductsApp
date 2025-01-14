export interface IProductsResponse {
  result: Result[];
  status: number;
}

export interface Result {
  _id: string;
  id_product: number;
  url_image: string;
  name: string;
  id_category: number;
  brand: string;
  upc: string;
  size: string;
  availableVariety: boolean;
  variety: string[];
  price: string;
  sku: string;
  desc: string;
  main: string;
  addl: string;
  burst: string[];
  sale_price: string;
  price_text: string;
  reg_price: number;
  save_up_to: string;
  item_code: number;
  group_code: number;
  with_cart: boolean;
  color: string;
  notes: string;
  buyer_notes: string;
  effective: Date;
  unit_price: string;
  quality_cf: string;
  type_of_meat: string;
  master_brand: string;
  type_of_cut: string;
  createdById: number;
  status_active: boolean;
  plu: string;
  limit: string;
  must_buy: string;
  limit_type: string;
  per: string;
  pack: number;
  count: number;
  w_simbol: string;
  embase: string;
}
