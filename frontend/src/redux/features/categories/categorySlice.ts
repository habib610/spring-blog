import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ERR_MSG } from "../../../constants/common";
import { Category } from "../../../types/types";
import { RootState } from "../../app/store";
import { fetchCategory } from "./categoriesApi";

interface LatestStory {
    isError: boolean;
    isLoading: boolean;
    error: string | undefined;
    categories: Category[] | [];
}
const initialState: LatestStory = {
    isError: false,
    isLoading: false,
    categories: [],
    error: "",
};

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async () => {
        const categories = fetchCategory();
        return categories;
    }
);
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state: LatestStory) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getCategory.fulfilled, (state: LatestStory, action) => {
                state.isError = false;
                state.isLoading = false;
                state.error = "";
                state.categories = action.payload;
            })
            .addCase(getCategory.rejected, (state: LatestStory, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message || ERR_MSG;
            });
    },
});

export const selectCategory = (state: RootState) => state.category;
export default categorySlice.reducer;
