import ScoreContext from '@context/ScoreContext';
import useCreateScroeContext from '@hooks/scoreContext/useCreateScroeContext/useCreateScroeContext';
import React, { FC, PropsWithChildren } from 'react';

const WithScoreContext: FC<PropsWithChildren> = ({ children }) => {
  const state = useCreateScroeContext();
  return (
    <ScoreContext.Provider value={state}>{children}</ScoreContext.Provider>
  );
};

export default WithScoreContext;
