import { resetSlice } from '@store/game/game.slice';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const WithGameClear: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetSlice());
  });
  return <div>{children}</div>;
};

export default WithGameClear;
