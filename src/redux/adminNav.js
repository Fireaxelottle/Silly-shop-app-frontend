import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    admin: false, 
    nav: false,
};

export const checkAdminPath = createAsyncThunk(
    'adminNav/checkPath',
    async (_, { dispatch }) => {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/admin')) {
            dispatch(toggleonAdmin());
        } else {
            dispatch(toggleoffAdmin());
        }
    }
);

const adminNavSlice = createSlice({
    name: 'adminNav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.nav = !state.nav;
        },
        toggleonAdmin: (state) => {
            state.admin = true
        },
        toggleoffAdmin: (state) => {
            state.admin = false
        }
    },
});

export const { toggleNav, toggleonAdmin, toggleoffAdmin } = adminNavSlice.actions;
export default adminNavSlice.reducer;
