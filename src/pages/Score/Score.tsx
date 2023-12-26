import Header from '@components/Header/Header';
import React from 'react';
import ScoreStars from '@ui/icons/ScoreStars';
import ScoreTasks from '@components/score/ScoreTasks/ScoreTasks';
import ScoreTime from '@components/score/ScoreTime/ScoreTime';
import PrimaryLink from '@ui/links/PrimaryLink/PrimaryLink';
import roots from '@utils/constants/roots';
import WithScoreContext from '@components/provider/WithScoreContext';
import s from './Score.module.scss';

const Score = () => {
  return (
    <WithScoreContext>
      <div>
        <div className={s.header}>
          <Header>
            <h1>Navigate Me</h1>
          </Header>
        </div>
        <div className={s.container}>
          <div className={s.icon}>
            <ScoreStars />
          </div>
          <h2 className={s.title}>Молодец!</h2>
          <p className={s.subtitle}>Задание выполнено</p>
          <div className={s.time}>
            <ScoreTime />
          </div>
          <ScoreTasks />
        </div>
        <div className={s.buttons}>
          <PrimaryLink to="/">К правилу</PrimaryLink>
          <PrimaryLink to={`../${roots.game}`}>Играть снова</PrimaryLink>
        </div>
      </div>
    </WithScoreContext>
  );
};

export default Score;
