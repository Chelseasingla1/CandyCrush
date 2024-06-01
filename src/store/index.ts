import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { dragEndReducer } from "./reducers/dragEnd";
import { moveBelowReducer } from "./reducers/moveBelow";

const initialState: {
  board: string[];
  boardSize: number;
  squareBeingReplaced: Element | undefined;
  squareBeingDragged: Element | undefined;
  score: number;
} = {
  board: [],
  boardSize: 8,
  squareBeingDragged: undefined,
  squareBeingReplaced: undefined,
  score: 0,
};

const candyCrushSlice = createSlice({
  name: "candyCrush",
  initialState,
  reducers: {
    updateBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload;
    },
    dragStart: (state, action: PayloadAction<any>) => {
      state.squareBeingDragged = action.payload;
    },
    dragDrop: (state, action: PayloadAction<any>) => {
      state.squareBeingReplaced = action.payload;
    },
    updateScore: (state, action: PayloadAction<number>) => {
        state.score += action.payload;  // Increment score
      },
      resetScore: (state) => {
        state.score = 0;
      },
    dragEnd: dragEndReducer,
    moveBelow: moveBelowReducer,
  },
});

export const store = configureStore({
  reducer: {
    candyCrush: candyCrushSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { updateBoard, moveBelow, dragDrop, dragEnd, dragStart, updateScore, resetScore } =
  candyCrushSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;