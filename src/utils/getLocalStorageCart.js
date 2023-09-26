import { getTotal } from "./getTotal";

export const getLocalStorageCart = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const { totalCount, totalPrice } = getTotal(items);
  return {
    items,
    totalCount,
    totalPrice,
  };
};
