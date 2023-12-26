import { IDraggbleObject } from '@customTypes/interface/draggbleObject';
import { IGameBody } from '@customTypes/interface/gameField';
import { ReducerAppAction } from '@customTypes/types/reducer';

export interface IGameInitialState {
  gameBody: IGameBody;
  activeObject: IDraggbleObject | null;
  gameStats: IGameStats;
}
export interface IGameStats {
  gameTime: number;
  gameDoneTasks: number;
  gameMaxTask: number;
  gameMistakeSum: number;
  gameMistakePerActiveItem: number;
}

export type GameSliceReducers<Payload = void> = ReducerAppAction<
  IGameInitialState,
  Payload
>;
