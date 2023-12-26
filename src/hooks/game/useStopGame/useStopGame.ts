import roots from '@utils/constants/roots';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStopGame = () => {
  const { gameDoneTasks, gameMaxTask } = useSelector(gameSelector).gameStats;
  const navigate = useNavigate();
  useEffect(() => {
    if (gameDoneTasks === gameMaxTask) {
      navigate(`../${roots.score}`);
    }
  }, [gameDoneTasks, gameMaxTask]);
};

export default useStopGame;
