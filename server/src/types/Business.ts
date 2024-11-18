export type Image = {
  url: string;
};

export type Business = {
  name: string;
  description: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: Image[];
};
