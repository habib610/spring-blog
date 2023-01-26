import { createSlice } from "@reduxjs/toolkit";
import { Paginate } from "../../../types/types";
import { RootState } from "../../app/store";
import { getLatestStory } from "../latest/latestSlice";

const initialState: Paginate = {
    pageNumber: 0,
    pageSize: 4,
    lastPage: false,
    totalElements: 0,
    firstPage: true,
    isLoading: false,
};

const paginateSlice = createSlice({
    name: "paginate",
    initialState,
    reducers: {
        changePageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLatestStory.pending, (state: Paginate) => {
                state.isLoading = true;
            })
            .addCase(getLatestStory.fulfilled, (state: Paginate, action) => {
                state.isLoading = false;
                state.pageNumber = action.payload?.pageNumber;
                state.pageSize = action.payload?.pageSize;
                state.lastPage = action.payload?.lastPage;
                state.totalElements = action.payload?.totalElements;
                state.firstPage = action.payload?.firstPage;
            })
            .addCase(getLatestStory.rejected, (state: Paginate, action) => {
                state.isLoading = false;
            });
    },
});

export const selectPaginate = (state: RootState) => state.paginate;
export const { changePageNumber } = paginateSlice.actions;
export default paginateSlice.reducer;
