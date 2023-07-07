import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: statuses.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//creating a Thunk(redux-core)
// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch) {
//     dispatch(setStatus(statuses.LOADING));
//     try {
//       const { data } = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(data));
//       dispatch(setStatus(statuses.IDLE));
//     } catch (error) {
//       dispatch(setStatus(statuses.ERROR));
//       console.log(error.message);
//     }
//   };
// }

// using asyncthunk(redux toolkit method)

export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/poducts");
  return data;
});
