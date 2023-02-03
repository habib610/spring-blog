import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ERR_MSG } from "../../../constants/common";
import { Post } from "../../../types/types";
import { RootState } from "../../app/store";
import { fetchUserPosts } from "./userPostApi";

interface UserPosts {
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
    content: Post[] | [];
}
const initialState: UserPosts = {
    isError: false,
    isLoading: false,
    content: [],
    error: "",
};

export const getUserAllPosts = createAsyncThunk(
    "userPosts/userAllPosts",
    async (id: number) => {
        const post = fetchUserPosts(id);
        return post;
    }
);

const userPostSlice = createSlice({
    name: "userPosts",
    initialState,
    reducers: {
        deleteAPost: (state, action) => {
            state.content = state.content.filter(
                (item) => item.id !== action.payload.id
            );
        },
        updateUserPost: (state, action) => {
            const filteredPost = state.content.filter(
                (item) => item.id !== action.payload.data.id
            );
            state.content = [...filteredPost, action.payload.data];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserAllPosts.pending, (state: UserPosts) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getUserAllPosts.fulfilled, (state: UserPosts, action) => {
                state.isError = false;
                state.isLoading = false;
                state.error = "";
                state.content = action.payload;
            })
            .addCase(getUserAllPosts.rejected, (state: UserPosts, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || ERR_MSG;
            });
    },
});
export const { deleteAPost, updateUserPost } = userPostSlice.actions;
export const selectUserPost = (state: RootState) => state.userPosts;
export default userPostSlice.reducer;
