import calcGameScore from '@utils/helpers/game/calcGameScore/calcGameScore';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useCalcGameProgress = () => {
  const { gameMaxTask, gameMistakeSum, gameDoneTasks } =
    useSelector(gameSelector).gameStats;

  return useMemo(() => {
    return parseInt(
      calcGameScore(gameDoneTasks - gameMistakeSum, gameMaxTask).toString(),
      10,
    );
  }, [gameMaxTask, gameMistakeSum, gameDoneTasks]);
};

export default useCalcGameProgress;
