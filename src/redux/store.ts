import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

import exercicesReducer from './exercicesSelectors/exercicesSelectorsSlice';

const rootReducer = combineReducers({
  exercicesSelectors: exercicesReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['exercicesSelectors'],
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([]),
});

let persistor = persistStore(store);

export { persistor };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export default store;
