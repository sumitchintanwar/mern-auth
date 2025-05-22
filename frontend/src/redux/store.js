// // import configureStore from "@reduxjs/toolkit";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user/userSlice.js";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { persistStore } from "redux-persist";
// import sessionStorage from "redux-persist/lib/storage/session";
// const rootReducer = combineReducers({ user: userReducer });
// const persistConfig = {
//   key: "root",
//   value: rootReducer,
//   storage: remember ? storage : sessionStorage,
//   whitelist: ["user"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer:
//     // user: userReducer,
//     // userReducer,
//     persistedReducer, //with local storage

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

let rememberMeStorage = storage;

// Persist config object
const persistConfig = {
  key: "root",
  storage: rememberMeStorage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const updatePersistConfig = (remember) => {
  rememberMeStorage = remember ? storage : sessionStorage;
  persistConfig.storage = rememberMeStorage;
  persistedReducer = persistReducer(persistConfig, rootReducer);
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
