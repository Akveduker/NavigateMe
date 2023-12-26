import ScoreContext from '@context/ScoreContext';
import useAppContext from '@hooks/context/useAppContext';
import VioletBlock from '@ui/VioletBlock/VioletBlock';
import ScoreClock from '@ui/icons/ScoreClock';
import React from 'react';

const ScoreTime = () => {
  const { gameTime } = useAppContext(ScoreContext);
  return (
    <VioletBlock icon={<ScoreClock />}>
      Время: <b>{gameTime}</b> секунды
    </VioletBlock>
  );
};

export default ScoreTime;
