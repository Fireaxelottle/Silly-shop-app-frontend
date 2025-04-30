// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunks for fetching data from backend
export const fetchProductInfo = createAsyncThunk(
  "product/fetchProductInfo",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/api/v1/product/latest"
    );
    return response.data.products;
  }
);

export const fetchProductSearch = createAsyncThunk(
  "product/fetchProductSearch",
  async (query) => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/product/find?query=${query}`
    );
    return response.data.products;
  }
);

export const fetchProductId = createAsyncThunk(
  "product/fetchProductId",
  async (id) => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/product/${id}`
    );
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productInfo: [],
    productSearch: [],
    productId: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductInfo.fulfilled, (state, action) => {
        state.productInfo = action.payload;
      })
      .addCase(fetchProductSearch.fulfilled, (state, action) => {
        state.productSearch = action.payload;
      })
      .addCase(fetchProductId.fulfilled, (state, action) => {
        state.productId = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export default productSlice.reducer;
