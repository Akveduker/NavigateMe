import { RootState } from '@customTypes/types/store';

const gameSelector = (store: RootState) => store.game;

export default gameSelector;
