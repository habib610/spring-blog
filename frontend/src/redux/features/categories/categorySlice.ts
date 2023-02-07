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
    activeCategory: string;
}
const initialState: LatestStory = {
    isError: false,
    isLoading: false,
    categories: [],
    error: "",
    activeCategory: "",
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
    reducers: {
        updateActiveCategory: (state, action) => {
            let existing = state.categories.find(
                (item) => item.categoryId === Number(action.payload)
            );
            const active = existing ? existing.categoryTitle : action.payload;

            state.activeCategory = active;
        },
        addNewCategory: (state, action) => {
            let newCategory = [...state.categories, action.payload];

            state.categories = newCategory;
        },
    },
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
export const { updateActiveCategory, addNewCategory } = categorySlice.actions;
export const selectCategory = (state: RootState) => state.category;
export default categorySlice.reducer;
