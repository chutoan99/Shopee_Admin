export interface Product {
  id: number;
  itemid: number;
  shopid: number;
  name: string;
  image: string;
  historical_sold: number;
  price: number;
  price_min: number;
  stock: number;
  price_max: number;
  price_min_before_discount: number;
  price_max_before_discount: number;
  discount: string;
  shop_rating: number;
  filename: null;
  createdAt: Date;
  updatedAt: Date;
}
