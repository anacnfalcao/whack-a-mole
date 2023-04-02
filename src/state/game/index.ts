import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@/state/store";
import { HYDRATE } from "next-redux-wrapper";

export interface GameState {
  latestScore: number;
}

// Initial state
const initialState: GameState = {
  latestScore: 0,
};

// Actual Slice
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setLatestScore(state, action) {
      state.latestScore += action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setLatestScore } = gameSlice.actions;

export const selectGameLatestScore = (state: AppState) => state.game.latestScore;

export default gameSlice.reducer;