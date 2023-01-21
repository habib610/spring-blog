import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { localUser } from "../../../constants/routes";
import { User } from "../../../types/types";
import axios from "../../../utils/axiosInstance";
import { RootState } from "../../app/store";
import { postUserData } from "./loginApi";

interface UserRegistration {
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
    token: string | undefined;
    user: User | undefined;
}
const initialState: UserRegistration = {
    isError: false,
    isLoading: false,
    user: {} as User,
    error: "",
    token: undefined,
};

export const prepareUserLogin = createAsyncThunk(
    "auth/userLogin",
    async (body: { username: string; password: string }) => {
        const user = postUserData(body);
        return user;
    }
);
const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedOut: (state) => {
            localStorage.removeItem(localUser);
            state.token = undefined;
            state.user = undefined;
            delete axios.defaults.headers.common.Authorization;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(prepareUserLogin.pending, (state: UserRegistration) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(
                prepareUserLogin.fulfilled,
                (state: UserRegistration, action) => {
                    state.isError = false;
                    state.isLoading = false;
                    state.user = action?.payload.user;
                    state.token = action?.payload.token;
                    state.error = "";

                    localStorage.setItem(
                        localUser,
                        JSON.stringify({
                            user: action?.payload?.user,
                            token: action?.payload?.token,
                        })
                    );
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${action?.payload?.token}`;
                }
            )
            .addCase(
                prepareUserLogin.rejected,
                (state: UserRegistration, action) => {
                    state.isError = true;
                    state.isLoading = false;
                    state.error = action.error?.message;
                }
            );
    },
});

export const selectAuth = (state: RootState) => state.auth;
export const { userLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;
