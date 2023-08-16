import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './Contacts/api';
import { myFilterSlice } from './Filter/slice';
import { userValidationSlice } from './Authorisation/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';

const persistConfig = {
  key: 'authorisation',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(persistConfig, userValidationSlice.reducer);

export const store = configureStore({
  reducer: {
    authorisation: persistAuthReducer,
     [contactsApi.reducerPath]: contactsApi.reducer,
    filter: myFilterSlice.reducer,
  },
    
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export type RootState = ReturnType<typeof store.getState>