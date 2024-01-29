import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./apiSlice";
// import authReducer from "./authSlice";
import { authReducer } from "./authSlice";
// import modalSlice from "./modalSlice";


export const store = configureStore({
    reducer: {
        // [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        // modal: modalSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;