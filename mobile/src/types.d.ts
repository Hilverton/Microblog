type User = {
  id: string;
  name: string;
  email: string;
}

type LoginResponse = {
  token: string;
  user: User;
}

type RegisterResponse = {
  message: string;
  user: User;
}

interface Tweet {
  __v: number;
  _id: string;
  author_id: string;
  content: string;
  createdAt: string;
  name: string;
  updatedAt: string;
}

//Routes types

type MainStackParamList = {
  Preload: undefined;
  Login: undefined;
  Register: undefined;
  PrivateRoutes: undefined;
}

type UsersBottomParamList = {
  Home: undefined;
  Profile: undefined;
  Tweet: undefined;
}
