import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { ContactCreateType, ContactRequestType } from '../../components/types';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com/', prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authorisation.token;
            if (token) headers.set('authorization', `Bearer ${token}`);
            return headers;
        },
    }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query<ContactRequestType[],null>({
            query: () => `contacts/`,
            providesTags: (result) => result
                ?
                [...result.map(({ id }: { id: string }) => ({ type: 'Contacts' as const, id })), { type: 'Contacts', id: 'LIST' }]
                :
                [{ type: 'Contacts', id: 'LIST' }],
        }),
        addContact: builder.mutation<ContactRequestType, ContactCreateType>({
            query: (body) => ({
                url: `contacts`,
                method: 'POST',
                body,
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Contacts', }],
        }),
        deleteContact: builder.mutation<{}, string>({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
        }),
        editContact: builder.mutation<ContactRequestType, { id: string, contact: ContactCreateType }>({
            query: ({ id, contact }) => ({
                url: `contacts/${id}`,
                method: 'PATCH',
                body: { ...contact },
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Contacts', }],
        }),
    }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useEditContactMutation } = contactsApi;