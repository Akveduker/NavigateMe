import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './PrimaryLink.module.scss';

const PrimaryLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} className={s.link}>
      {children}
    </Link>
  );
};

export default PrimaryLink;
