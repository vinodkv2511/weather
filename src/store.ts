import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { geoCodingApi } from './services/geoCoding';
import { weatherApi } from './services/weather';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [geoCodingApi.reducerPath]: geoCodingApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
