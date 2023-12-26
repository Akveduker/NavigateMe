import React from 'react';
import GameField from '@components/game/GameField/GameField';
import GameHeader from '@components/game/gameHeader/GameHeader/GameHeader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GameStats from '@components/game/gameStats/GameStats/GameStats';
import Header from '@components/Header/Header';
import PrimaryLink from '@ui/links/PrimaryLink/PrimaryLink';
import roots from '@utils/constants/roots';
import WithMistakeContext from '@components/provider/WithMistakeContext';
import WithGameClear from '@components/provider/WithGameClear';
import WithStopGame from '@components/provider/WithStopGame';
import s from './Game.module.scss';

const Game = () => {
  return (
    <WithStopGame>
      <WithGameClear>
        <div className={s.container}>
          <div className={s.header}>
            <Header>
              <h1>Navigate me</h1>
            </Header>
          </div>
          <div className={s.game}>
            <GameStats />
            <WithMistakeContext>
              <DndProvider backend={HTML5Backend}>
                <GameHeader />
                <GameField />
              </DndProvider>
            </WithMistakeContext>
          </div>
          <div className={s.links}>
            <PrimaryLink to="/">К правилу</PrimaryLink>
            <PrimaryLink to={`../${roots.score}`}>Завершить игру</PrimaryLink>
          </div>
        </div>
      </WithGameClear>
    </WithStopGame>
  );
};

export default Game;
