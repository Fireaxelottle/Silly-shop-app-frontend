// store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import adminNavSlice from './adminNav.js';
import produdctSlice from './product.js';
import userReducer from './user.js';
 const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    adminNav: adminNavSlice,
    product: produdctSlice,
  },
});

export default store;