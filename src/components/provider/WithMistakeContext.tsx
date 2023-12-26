import MistakeContext from '@context/MistakeContext';
import useCreateMistakeContext from '@hooks/mistakeContext/useCreateMistakeContext/useCreateMistakeContext';
import React, { FC, PropsWithChildren } from 'react';

const WithMistakeContext: FC<PropsWithChildren> = ({ children }) => {
  const state = useCreateMistakeContext();
  return (
    <MistakeContext.Provider value={state}>{children}</MistakeContext.Provider>
  );
};

export default WithMistakeContext;
