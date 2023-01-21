import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/types";
import { createNewUser } from "./registrationApi";

interface UserRegistration {
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
    user: User;
}
const initialState: UserRegistration = {
    isError: false,
    isLoading: false,
    user: <User>{},
    error: "",
};

const createUserSignup = createAsyncThunk(
    "registration/userRegistration",
    async (body: User) => {
        const user = createNewUser(body);
        return user;
    }
);
const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUserSignup.pending, (state: UserRegistration) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(
                createUserSignup.fulfilled,
                (state: UserRegistration, action) => {
                    state.isError = false;
                    state.isLoading = false;
                    state.user = action.payload;
                    state.error = "";
                }
            )
            .addCase(
                createUserSignup.rejected,
                (state: UserRegistration, action) => {
                    state.isError = true;
                    state.isLoading = false;
                    state.error = action.error?.message;
                }
            );
    },
});

export default registrationSlice.reducer;
