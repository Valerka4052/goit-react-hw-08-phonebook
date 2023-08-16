import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import Notiflix from "notiflix";
import { LoginUserType, SignUpUserType, SignupRequestType } from "../../components/types";
import { RootState } from "../store";

axios.defaults.baseURL= 'https://connections-api.herokuapp.com/';

function setToken(token:string):void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

function clearToken():void {
    axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk<SignupRequestType, SignUpUserType, { rejectValue: string }>(
    'authorisation/signUp',
    async function (newUser:SignUpUserType, thunkAPI) {
        try {
            const response = await axios.post<SignupRequestType, AxiosResponse<SignupRequestType>, SignUpUserType>(`/users/signup`, newUser);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
             if (typeof error === "string") {
                Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue(error);
            } else {
                Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue("Server error");
            }
              };
    },
);

export const LogIn = createAsyncThunk<SignupRequestType,LoginUserType, { rejectValue: string }>(
    'authorisation/LogIn',
    async function (user: LoginUserType, thunkAPI) {
        try {
            const response = await axios.post<SignupRequestType, AxiosResponse<SignupRequestType>, LoginUserType>(`/users/login`, user);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            if (typeof error === "string") {
                Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue(error);
            } else {
                Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue("Server error");
            }
        }
    }
);

export const LogOut = createAsyncThunk(
    'authorisation/LogOut',
    async function (_, thunkAPI) {
        try {
            const response = await axios.post<{}>(`/users/logout`);
            clearToken();
            return response.data
        } catch (error) {
            if (typeof error === "string") {
                Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue(error);
            } else {
                Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue("Server error");
            }
        };
    },
);

export const refreshUser = createAsyncThunk<{name:string,email:string},{},{rejectValue: string , state: RootState}>(
    'authorisation/refreshUser',
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().authorisation;
        if (token === null) {
            return thunkAPI.rejectWithValue('no valid token');
        };
        try {
            setToken(token);
            const response = await axios.get<{name:string,email:string}>('/users/current');
            return response.data;
        } catch (error) {
            if (typeof error === "string") {
                // Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue(error);
            } else {
                // Notiflix.Report.failure("Failed to sign up", "Server error", "OK");
                return thunkAPI.rejectWithValue("Server error");
            }
        };
    },
);