import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categorySlice";
import latestReducer from "../features/latest/latestSlice";
import loginReducer from "../features/login/loginSlice";
import paginateReducer from "../features/paginate/paginateSlice";
import registrationReducer from "../features/registration/registrationSlice";
import userListReducer from "../features/user-list/userListSlice";
import userPostReducer from "../features/user-post/userPostSlice";

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        registration: registrationReducer,
        latest: latestReducer,
        userPosts: userPostReducer,
        paginate: paginateReducer,
        category: categoryReducer,
        userList: userListReducer,
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
