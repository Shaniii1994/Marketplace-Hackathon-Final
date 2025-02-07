interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  discountPercentage?: number;
  stockLevel: number;
  category: string;
  description: string;
  slug: {
    _type: 'slug';
    current: string;
  };
};
