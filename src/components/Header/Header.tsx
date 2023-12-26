import React, { FC, PropsWithChildren } from 'react';
import s from './Header.module.scss';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.header}>{children}</div>;
};

export default Header;
