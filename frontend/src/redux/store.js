// import configureStore from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
const rootReducer = combineReducers({ user: userReducer });
const persistConfig = {
  key: "root",
  value: rootReducer,
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:
    // user: userReducer,
    // userReducer,
    persistedReducer, //with local storage

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
