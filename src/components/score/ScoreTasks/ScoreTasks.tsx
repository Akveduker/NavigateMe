import ScoreContext from '@context/ScoreContext';
import useAppContext from '@hooks/context/useAppContext';
import VioletBlock from '@ui/VioletBlock/VioletBlock';
import ScoreLike from '@ui/icons/ScoreLike';
import React from 'react';

const ScoreTasks = () => {
  const { gameMaxTask, gameMistakeSum, gameDoneTasks } =
    useAppContext(ScoreContext);
  return (
    <VioletBlock icon={<ScoreLike />}>
      Выполнено заданий: <b>{gameDoneTasks - gameMistakeSum}</b> из{' '}
      <b>{gameMaxTask}</b>
    </VioletBlock>
  );
};

export default ScoreTasks;
