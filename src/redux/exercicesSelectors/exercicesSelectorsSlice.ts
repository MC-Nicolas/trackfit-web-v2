import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  results: [],
  category: 'cardio',
  exercice: '',
  by: '',
  typeOfResultOption: '',
};

export const exercicesSelectors = createSlice({
  name: 'exercicesSelectors',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setExerciceBy: (state, action) => {
      state.by = action.payload;
    },
    setExerciceCategory: (state, action) => {
      state.category = action.payload;
    },
    setExercice: (state, action) => {
      state.exercice = action.payload;
    },
    setTypeOfResultOption: (state, action) => {
      state.typeOfResultOption = action.payload;
    },
    reset: (state) => {
      state.results = [];
      state.category = 'cardio';
      state.exercice = '';
      state.by = '';
      state.typeOfResultOption = '';
    },
  },
});

export const {
  setResults,
  setExerciceBy,
  setExercice,
  setExerciceCategory,
  setTypeOfResultOption,
  reset,
} = exercicesSelectors.actions;

export default exercicesSelectors.reducer;
