import React, { FC, PropsWithChildren } from 'react';
import s from './RoundBlock.module.scss';

const RoundBlock: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default RoundBlock;
