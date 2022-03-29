import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:null,
    isLoggedIn:false,
    pending:false,
    error: false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart: (state) => {
            state.pending = true;
            state.isLoggedIn = false;
        },
        loginSuccess:(state,action) => {
            state.pending = false;
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        loginError: (state) => {
            state.error = true,
            state.isLoggedIn = false;
            state.pending = false;
        },
        logoutStart: (state) => {
            state.pending = true;
            state.isLoggedIn = true;
        },
        logoutSuccess: (state) => {
            state.pending = false;
            state.isLoggedIn = false;
            state.token = null;
        },
        logoutError: (state) => {
            state.pending = false;
            state.isLoggedIn = true;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginError,
    logoutStart,
    logoutSuccess,
    logoutError
} = userSlice.actions;

export default userSlice.reducer;