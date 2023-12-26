import useStopGame from '@hooks/game/useStopGame/useStopGame';
import React, { FC, PropsWithChildren } from 'react';

const WithStopGame: FC<PropsWithChildren> = ({ children }) => {
  useStopGame();
  return <div>{children}</div>;
};

export default WithStopGame;
