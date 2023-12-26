import React from 'react';
import GameTime from '../GameTime/GameTime';
import GameProgress from '../GameProgress/GameProgress';
import s from './GameStats.module.scss';

const GameStats = () => {
  return (
    <div className={s.container}>
      <div className={s.stat}>
        <GameTime />
      </div>
      <div className={s.stat}>
        <GameProgress />
      </div>
    </div>
  );
};

export default GameStats;
