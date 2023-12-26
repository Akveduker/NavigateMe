import RoundBlock from '@ui/RoundBlock/RoundBlock';
import React from 'react';
import StarEmpty from '@ui/icons/StarEmpty';
import useCalcGameProgress from '@hooks/game/useCalcGameProgress/useCalcGameProgress';
import StarFilledScore from '@ui/icons/StarFilledScore';
import s from './GameProgress.module.scss';

const GameProgress = () => {
  const progress = useCalcGameProgress();
  return (
    <RoundBlock>
      <div className={s.container}>
        <div className={s.stars}>
          {progress >= 50 ? <StarFilledScore /> : <StarEmpty />}
          {progress >= 66 ? <StarFilledScore /> : <StarEmpty />}
          {progress >= 83 ? <StarFilledScore /> : <StarEmpty />}
        </div>
        <div className={s.progress} style={{ width: `${progress}%` }} />
      </div>
    </RoundBlock>
  );
};

export default GameProgress;
