import { createSlice } from '@reduxjs/toolkit';
import { signUp, LogIn, LogOut, refreshUser } from './operations';
import { AuthorisationInitialState } from '../../components/types';

const initialState: AuthorisationInitialState = {
    user: {
        name: "",
        email: "",
    },
    token: "",
    isLoggedIn: false,
    isRefresh: false,
    error:""
};

export const userValidationSlice = createSlice({
    name: 'authorisation',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(signUp.pending, (state) => {
                state.isRefresh = true;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isRefresh = false;
                state.isLoggedIn = true;
                state.user.name = action.payload.user.name;
                state.user.email = action.payload.user.email;
                state.token = action.payload.token;
            })
            .addCase(LogIn.fulfilled, (state, action) => {
                state.isRefresh = false;
                state.isLoggedIn = true;
                state.user.name = action.payload.user.name;
                state.user.email = action.payload.user.email;
                state.token = action.payload.token;
            })
            .addCase(LogIn.rejected, (state, action) => {
                state.isRefresh = false;
                if (typeof action.payload === "string") state.error = action.payload;
            })
            .addCase(LogOut.fulfilled, (state) => {
                state.user.name = "";
                state.user.email = "";
                state.token = "";
                state.isRefresh = false;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefresh = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                if (!action.payload) { return state };
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.isRefresh = false;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefresh = false;
                if (typeof action.payload === "string") state.error = action.payload;
            })
    },
});
