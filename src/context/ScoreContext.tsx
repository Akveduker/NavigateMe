import { IGameStats } from '@store/game/game.type';
import { createContext } from 'react';

const ScoreContext = createContext<null | IGameStats>(null);

export default ScoreContext;
