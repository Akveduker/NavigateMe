import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import s from './PrimaryButton.module.scss';

const PrimaryButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button {...props} className={s.button}>
      {children}
    </button>
  );
};

export default PrimaryButton;
