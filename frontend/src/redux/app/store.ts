import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import latestReducer from "../features/latest/latestSlice";
import loginReducer from "../features/login/loginSlice";
import paginateReducer from "../features/paginate/paginateSlice";
import registrationReducer from "../features/registration/registrationSlice";

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        registration: registrationReducer,
        latest: latestReducer,
        paginate: paginateReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
