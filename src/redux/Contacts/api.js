import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useSelector } from "react-redux";
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
    'myContacts/fetchContacts',
    async function (_, thunkAPI) {
        try {
            const response = await axios.get(`contacts/`)
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        };
    },
);

export const addContact = createAsyncThunk(
    'myContacts/addContact',
    async function ({ name, number }, thunkAPI) {
        try {
            const response = await axios.post("contacts/", { name, number });
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        };
    },
);

export const removeContact = createAsyncThunk(
    'myContacts/removeContact',
    async function (id, thunkAPI) {
        try {
            const response = await axios.delete(`contacts/${id}`);
            return response.data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        };
    },
);
