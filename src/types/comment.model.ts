export interface Comment {
  id: number;
  orderid: number;
  itemid: number;
  userid: string;
  shopid: number;
  cmtid: number;
  rating: number;
  status: number;
  rating_star: number;
  like_count: number;
  comment: string;
  author_username: string;
  author_portrait: null;
  images: string;
  cover: string;
  videos: string;
  model_name: string;
  options: string;
  liked: number;
  mtime: Date;
  ctime: Date;
  createdAt: Date;
  updatedAt: Date;
}
