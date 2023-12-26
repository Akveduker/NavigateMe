import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import useUpdateStats from '../useUpdateStats/useUpdateStats';

const useGameTImer = () => {
  const { gameTime } = useSelector(gameSelector).gameStats;
  const updateStats = useUpdateStats();
  let timeout: NodeJS.Timeout;
  useEffect(() => {
    timeout = setTimeout(
      () =>
        updateStats(state => ({
          gameTime: state.gameTime + 1,
        })),
      1000,
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [gameTime]);
  const minutes = Math.floor(gameTime / 60);
  const seconds = gameTime - minutes * 60;
  return [minutes, seconds];
};
export default useGameTImer;
