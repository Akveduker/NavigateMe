import { createSlice } from '@reduxjs/toolkit';
import { gameBody } from '@utils/constants/gameField';
import getRandomNum from '@utils/helpers/general/getRandomNum/getRandomNum';
import { IGameInitialState } from './game.type';
import reducers from './game.actions';

const initialState: IGameInitialState = {
  gameBody,
  activeObject: gameBody.draggableObjects[getRandomNum(0, 2)],
  gameStats: {
    gameTime: 0,
    gameMaxTask: gameBody.draggableObjects.length,
    gameDoneTasks: 0,
    gameMistakePerActiveItem: 0,
    gameMistakeSum: 0,
  },
};
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    ...reducers,
    resetSlice: () => initialState,
  },
});

export const { reducer } = gameSlice;
export const {
  removeDraggbleObject,
  setNewActiveObject,
  setGameStats,
  resetSlice,
} = gameSlice.actions;
