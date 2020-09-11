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