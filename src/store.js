import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {movieApi} from './movieApi';
export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
setupListeners(store.dispatch);
