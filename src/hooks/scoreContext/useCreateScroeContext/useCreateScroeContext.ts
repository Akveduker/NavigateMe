import { resetSlice } from '@store/game/game.slice';
import roots from '@utils/constants/roots';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useCreateScroeContext = () => {
  const { gameStats } = useSelector(gameSelector);
  const state = useMemo(() => gameStats, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (state.gameTime === 0 && state.gameDoneTasks === 0) {
      navigate(`../${roots.game}`);
    }
    dispatch(resetSlice());
  });
  return state;
};

export default useCreateScroeContext;
