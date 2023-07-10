export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  saved: boolean;
  imageOffset?: string;
}
