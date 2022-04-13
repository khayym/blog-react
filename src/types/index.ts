export type Idata = {
  email: string;
  password: string;
  preventDefault?: any;
};

export type IAuth = {
  login?: any;
  loginError?: string;
  user?: any;
};

export type IContext = {
  user?: any;
  setUser?: any;
};
