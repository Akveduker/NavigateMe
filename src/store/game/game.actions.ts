import getRandomNum from '@utils/helpers/general/getRandomNum/getRandomNum';
import { GameSliceReducers, IGameStats } from './game.type';

const removeDraggbleObject: GameSliceReducers<number> = (
  state,
  { payload },
) => {
  const { draggableObjects } = state.gameBody;
  state.gameBody.draggableObjects = draggableObjects.filter(
    item => item.objectId !== payload,
  );
};

const setNewActiveObject: GameSliceReducers = state => {
  const { draggableObjects } = state.gameBody;
  const { gameDoneTasks, gameMaxTask } = state.gameStats;
  state.gameStats.gameMistakePerActiveItem = 0;
  if (draggableObjects.length === 1) {
    const [firstItem] = draggableObjects;
    state.activeObject = firstItem;
    state.gameStats.gameDoneTasks = gameMaxTask - 1;
    return state;
  }
  if (!draggableObjects.length) {
    state.activeObject = null;
    state.gameStats.gameDoneTasks = gameMaxTask;
    return state;
  }
  const randomIndex = getRandomNum(0, Math.min(2, draggableObjects.length - 1));
  const newActiveObject = state.gameBody.draggableObjects[randomIndex];
  state.gameStats.gameDoneTasks = gameDoneTasks + 1;
  state.activeObject = newActiveObject;
  return state;
};

const setGameStats: GameSliceReducers<Partial<IGameStats>> = (
  state,
  { payload },
) => {
  state.gameStats = { ...state.gameStats, ...payload };
};

const reducers = {
  removeDraggbleObject,
  setNewActiveObject,
  setGameStats,
};
export default reducers;
