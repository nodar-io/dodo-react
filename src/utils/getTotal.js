export const getTotal = items => {
  const totalCount = items.reduce((sum, obj) => obj.count + sum, 0);
  const totalPrice = items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  return {
    totalCount,
    totalPrice
  };
};
