import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PizzaService } from "../../services/pizzas.service";

const initialState = {
  items: [],
  status: "loading",
};
export const fetchPizzas = createAsyncThunk("pizza/fetchByPizzas", async () => {
  const response = await PizzaService.getAllPizzas();

  return response;
});

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, state => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, state => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
