import { configureStore } from '@reduxjs/toolkit';
import { myContactsSlice } from './Contacts/slice';
import { myFilterSlice } from './Filter/slice';
import { userValidationSlice } from './Sign/slice';
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

const persistConfig = {
  key: 'authorisation',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(persistConfig, userValidationSlice.reducer);

export const store = configureStore({
  reducer: {
    authorisation: persistAuthReducer,
    contacts: myContactsSlice.reducer,
    filter: myFilterSlice.reducer,
  },
    
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

