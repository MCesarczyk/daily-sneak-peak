import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: '',
  page: 1,
  question: {},
  answers: []
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialogOpen: state => {
      state.open = true
    },
    setDialogType: (state, { payload: type }) => {
      state.type = type;
    },
    setDialogClosed: () => initialState,
    setPage: (state, { payload: page }) => {
      state.page = page;
    },
    setQuestion: (state, { payload: question }) => {
      state.question = question;
    },
    setAnswers: (state, { payload: answers }) => {
      state.answers = answers;
    },
  },
});

export const {
  setDialogOpen,
  setDialogType,
  setDialogClosed,
  setPage,
  setQuestion,
  setAnswers
} = dialogSlice.actions;

const selectDialog = state => state.dialog;

export const selectDialogOpen = state => selectDialog(state).open;
export const selectDialogType = state => selectDialog(state).type;
export const selectPage = state => selectDialog(state).page;
export const selectQuestion = state => selectDialog(state).question;
export const selectAnswers = state => selectDialog(state).answers;

export default dialogSlice.reducer;