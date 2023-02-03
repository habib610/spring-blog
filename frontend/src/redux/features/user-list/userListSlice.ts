import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ERR_MSG } from "../../../constants/common";
import { User } from "../../../types/types";
import { RootState } from "../../app/store";
import { fetchUserList } from "./userListApi";

interface ListUser {
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
    usersList: User[] | [];
}
const initialState: ListUser = {
    isError: false,
    isLoading: false,
    usersList: [],
    error: "",
};

export const getUserList = createAsyncThunk("users/allUserList", async () => {
    const list = fetchUserList();
    return list;
});
const userListSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        removeUserFromList: (state, action) => {
            state.usersList = state.usersList.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserList.pending, (state: ListUser) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getUserList.fulfilled, (state: ListUser, action) => {
                state.isError = false;
                state.isLoading = false;
                state.error = "";
                state.usersList = action.payload;
            })
            .addCase(getUserList.rejected, (state: ListUser, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || ERR_MSG;
            });
    },
});
export const { removeUserFromList } = userListSlice.actions;
export const selectUserList = (state: RootState) => state.userList;
export default userListSlice.reducer;
