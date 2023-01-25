import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import registrationReducer from "../features/registration/registrationSlice";

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        registration: registrationReducer,
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
