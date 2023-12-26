import React, { FC, PropsWithChildren, ReactNode } from 'react';
import s from './VioletBlock.module.scss';

const VioletBlock: FC<PropsWithChildren<{ icon: ReactNode }>> = ({
  children,
  icon,
}) => {
  return (
    <div className={s.container}>
      <div className={s.icon}>{icon}</div>
      {children}
    </div>
  );
};

export default VioletBlock;
