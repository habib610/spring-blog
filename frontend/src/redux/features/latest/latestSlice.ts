import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ERR_MSG } from "../../../constants/common";
import { LatestStoryAPI, Post } from "../../../types/types";
import { RootState } from "../../app/store";
import { fetchLatestStory } from "./latestApi";

interface LatestStory {
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
    content: Post[] | [];
}
const initialState: LatestStory = {
    isError: false,
    isLoading: false,
    content: [],
    error: "",
};

export const getLatestStory = createAsyncThunk(
    "latest/latestStory",
    async (query: LatestStoryAPI) => {
        const post = fetchLatestStory(query);
        return post;
    }
);
const latestSlice = createSlice({
    name: "latest",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLatestStory.pending, (state: LatestStory) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getLatestStory.fulfilled, (state: LatestStory, action) => {
                state.isError = false;
                state.isLoading = false;
                state.error = "";
                state.content = action.payload?.content;
            })
            .addCase(getLatestStory.rejected, (state: LatestStory, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || ERR_MSG;
            });
    },
});

export const selectLatest = (state: RootState) => state.latest;
export default latestSlice.reducer;
