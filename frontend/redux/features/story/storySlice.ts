import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoryContent } from "../../../types/types";
import { getStory } from "./storyApi";

export interface StoryState {
    story: StoryContent;
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
}
const initialState: StoryState = {
    story: <StoryContent>{},
    isError: false,
    isLoading: false,
    error: "",
};
export const fetchStory = createAsyncThunk(
    "story/fetchAllStory",
    async (id: number) => {
        console.log("insideAsync");
        const story = await getStory(1);
        return story;
    }
);

export const storySlice = createSlice({
    name: "counter",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStory.pending, (state) => {
                console.log("Pending");
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchStory.fulfilled, (state, action) => {
                state.story = action.payload;
                console.log("payload");
                state.isError = false;
                state.isLoading = false;
                state.error = "";
            })
            .addCase(fetchStory.rejected, (state, action) => {
                console.log("fails");
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            });
    },
});

// Local Action
// export {} = storySlice.actions
// Default Reducer
export default storySlice.reducer;
