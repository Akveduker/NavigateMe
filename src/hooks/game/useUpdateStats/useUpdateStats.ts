import { setGameStats } from '@store/game/game.slice';
import { IGameStats } from '@store/game/game.type';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useUpdateStats = () => {
  const { gameStats } = useSelector(gameSelector);
  const dispatch = useDispatch();
  const updateStats = useCallback(
    (callback: (stats: IGameStats) => Partial<IGameStats>) =>
      dispatch(setGameStats(callback(gameStats))),
    [gameStats],
  );
  return updateStats;
};
export default useUpdateStats;
