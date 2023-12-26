import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './game/game.slice';

const store = configureStore({
  reducer: {
    game: reducer,
  },
});

export default store;
