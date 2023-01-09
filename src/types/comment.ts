export interface Comment {
  id: number;
  orderid: string;
  itemid: string;
  cmtid: string;
  rating: number;
  userid: string;
  shopid: string;
  comment: string;
  rating_star: number;
  status: number;
  author_username: string;
  images: string;
  videos: null | string;
  createdAt: Date;
  updatedAt: Date;
}
