export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const counterPlus = () => {
  return {
    type: INCREMENT,
  };
};

export const counterMinus = () => {
  return {
    type: DECREMENT,
  };
};
