import useIsObjectActive from '@hooks/game/useIsObjectActive/useIsObjectActive';
import useUpdateStats from '@hooks/game/useUpdateStats/useUpdateStats';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useCreateDropZoneMistake = (onDrop: () => void, objectId: number) => {
  const isActive = useIsObjectActive(objectId);
  const { gameMistakePerActiveItem } = useSelector(gameSelector).gameStats;
  const updateStats = useUpdateStats();
  useEffect(() => {
    if (gameMistakePerActiveItem === 3 && isActive) {
      onDrop();
      updateStats(state => ({
        gameMistakeSum: state.gameMistakeSum + 1,
      }));
    }
  }, [gameMistakePerActiveItem]);
};
export default useCreateDropZoneMistake;
