import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nav: false,
};

const adminNavSlice = createSlice({
    name: 'adminNav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.nav = !state.nav;
        },
    },
});

export const { toggleNav } = adminNavSlice.actions;
export default adminNavSlice.reducer;
