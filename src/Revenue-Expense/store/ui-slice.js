import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showAddTable: false,
    showEdit: false,
    showCateSell: false,
    showCateSum: false,
    showCateOther: false,
    showPersonOther: false,
    showSummary: false,
    response: null,
  },
  reducers: {
    showingAddTable(state) {
      state.showAddTable = !state.showAddTable;
    },

    showingEdit(state) {
      state.showEdit = !state.showEdit;
    },

    showingCateSell(state, action) {
      state.showCateSell = action.payload;
    },

    showingCateOther(state, action) {
      state.showCateOther = action.payload;
    },

    showingCateSum(state) {
      state.showCateSum = !state.showCateSum;
    },

    showingPersonOther(state, action) {
      state.showPersonOther = action.payload;
    },

    showingSummary(state) {
      state.showSummary = !state.showSummary;
    },

    showResponse(state, action) {
      state.response = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
