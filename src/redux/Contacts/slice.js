import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact, editContact } from './api';

export const myContactsSlice = createSlice({
    name: 'myContacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = [...state.items, action.payload];
                state.error = null;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(removeContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeContact.fulfilled, (state, action) => {
                const filteredContacts = state.items.filter((contact) => {
                    return contact.id !== action.payload.id;
                });
                state.isLoading = false;
                state.items = filteredContacts;
                state.error = null;
            })
            .addCase(removeContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(editContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                const editedContacts = state.items.map(contact => contact.id === action.payload.id ? contact = action.payload : contact);
                state.isLoading = false;
                state.items = editedContacts;
                state.error = null;
            })
            .addCase(editContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

