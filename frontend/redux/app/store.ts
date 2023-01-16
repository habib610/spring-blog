import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import storyReducer from "../features/story/storySlice";

export const store = configureStore({
    reducer: {
        story: storyReducer,
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
