export type User = {
  _id: string;
  name: string;
  email: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  status: string;
  token: string;
  user: User;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};
