import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageCart } from "../../utils/getLocalStorageCart";

const { items, totalCount, totalPrice } = getLocalStorageCart();
const initialState = {
  items,
  totalPrice,
  totalCount,
};

const modify = (state, payload) => {
  return state.items.find(
    obj =>
      obj.id === payload.id &&
      obj.size === payload.size &&
      obj.type === payload.type
  );
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const findItem = modify(state, payload);

      findItem
        ? (findItem.count += 1)
        : state.items.push({ ...payload, count: 1 });
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0);
    },

    removeItem(state, { payload }) {
      const findItem = modify(state, payload);

      state.totalPrice -= findItem.price * findItem.count;
      state.totalCount -= findItem.count;
      findItem.count = 0;
      state.items = state.items.filter(
        obj =>
          obj.id !== payload.id ||
          obj.size !== payload.size ||
          obj.type !== payload.type
      );
    },
    minusItem(state, { payload }) {
      const findItem = modify(state, payload);
      state.totalPrice -= findItem.price;
      findItem.count -= 1;
      state.totalCount -= 1;
      state.items =
        findItem.count === 0
          ? state.items.filter(obj => obj.count !== 0)
          : state.items;
    },
  },
});

export const { addItem, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
