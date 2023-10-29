export const incrementCreator = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

export const decrementCreator = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
