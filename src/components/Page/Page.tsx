import React, { FC, PropsWithChildren } from 'react';
import s from './Page.module.scss';

const Page: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.page}>{children}</div>;
};

export default Page;
