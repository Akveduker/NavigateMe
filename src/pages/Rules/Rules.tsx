import Header from '@components/Header/Header';
import React from 'react';
import StarFilled from '@ui/icons/StarFilled';
import PrimaryLink from '@ui/links/PrimaryLink/PrimaryLink';
import roots from '@utils/constants/roots';
import s from './Rules.module.scss';

const Rules = () => {
  return (
    <div>
      <div className={s.header}>
        <Header>
          <div className={s.headerWrapper}>
            <h1>Navigate Me</h1>
            <p className={s.subtitle}>Правила</p>
          </div>
        </Header>
      </div>
      <div className={s.container}>
        <div className={s.rules}>
          <div className={s.rulesHeader}>
            <h4>Описание игры</h4>
            <p className={s.rulesSubtitle}>
              Расставь предметы в соответствии с заданием.
            </p>
          </div>
          <div className={s.rulesContainer}>
            <div className={s.item}>
              <div className={s.img}>
                <div className={s.icon}>
                  <StarFilled />
                </div>
                <div className={s.icon}>
                  <StarFilled />
                </div>
                <div className={s.icon}>
                  <StarFilled />
                </div>
              </div>
              <p>Выполнить задание без ошибок</p>
            </div>
            <div className={s.item}>
              <div className={s.img}>
                <div className={s.icon}>
                  <StarFilled />
                </div>
                <div className={s.icon}>
                  <StarFilled />
                </div>
              </div>
              <p>Выполнить задание, максимум ошибок 2</p>
            </div>
            <div className={s.item}>
              <div className={s.img}>
                <div className={s.icon}>
                  <StarFilled />
                </div>
              </div>
              <p>Выполнить задание, максимум ошибок 3</p>
            </div>
          </div>
        </div>
        <div className={s.link}>
          <PrimaryLink to={roots.game}>Играть</PrimaryLink>
        </div>
      </div>
    </div>
  );
};

export default Rules;
