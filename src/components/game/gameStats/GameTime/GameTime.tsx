import RoundBlock from '@ui/RoundBlock/RoundBlock';
import React from 'react';
import Clock from '@ui/icons/Clock';
import checkIfTimeNatural from '@utils/helpers/general/checkIfTimeNatural/checkIfTimeNatural';
import useGameTImer from '@hooks/game/useGameTImer/useGameTImer';
import s from './GameTime.module.scss';

const GameTime = () => {
  const [minutes, seconds] = useGameTImer();
  return (
    <RoundBlock>
      <div className={s.container}>
        <div className={s.icon}>
          <Clock />
        </div>
        <span className={s.text}>
          {checkIfTimeNatural(minutes)}:{checkIfTimeNatural(seconds)}
        </span>
      </div>
    </RoundBlock>
  );
};

export default GameTime;
