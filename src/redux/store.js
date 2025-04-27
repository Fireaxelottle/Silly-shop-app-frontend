// store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import adminNavSlice from './adminNav.js';
 const store = configureStore({
  reducer: {
    ui: uiReducer,
    adminNav: adminNavSlice,
  },
});

export default store;