import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk for fetching pie chart data
export const fetchPieData = createAsyncThunk(
  'charts/fetchPieData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/admin/stats/pie');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    pieData: [],
    loading: false,
    error: null
  },
  reducers: {
    clearChartError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPieData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPieData.fulfilled, (state, action) => {
        state.loading = false;
        state.pieData = action.payload;
      })
      .addCase(fetchPieData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearChartError } = chartsSlice.actions;
export default chartsSlice.reducer;