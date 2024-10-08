import classNames from 'classnames';
import React, { ReactElement } from 'react';

import "./AnimationLayoutBox.css";

interface AnimationLayoutBoxType {
  isAnimating: string | null;
}

export const AnimationLayoutBox = (props: AnimationLayoutBoxType): ReactElement => {
  const { isAnimating } = props;
  return (
    <div className={classNames(
      "wrapExchangeBox hidden lg:block",
      isAnimating === 'auth' && 'animateShadow'
      )}>
      <div className={classNames(
        'exchangeBox',
        'dark:bg-blue-800 bg-blue-700',
        isAnimating === 'auth'  && "animateRegister",
        isAnimating === 'register' && "animateAuth",
      )}>
        {isAnimating === 'register'
          ?
          <div className={classNames(
            "w-[500px]",
            `boxInfo ${isAnimating === 'register' ? "visible" : ""}`
          )}>
            <h1 className="text-7xl font-bold">Welcome</h1>
            <p className='text-2xl'>
              Добро пожаловать в DI — удобный инструмент для управления проектами и задачами!
              Войдите в свой аккаунт, чтобы начать планировать проекты, отслеживать прогресс и работать в команде. Все ваши задачи под контролем!
            </p>
          </div>
          :
          <div className={classNames(
            "w-[500px]",
            `boxInfo ${isAnimating === 'auth' ? "visible" : ""}`
          )}>
            <h1 className="text-7xl font-bold">Good bye</h1>
            <p className='text-2xl'>
              Добро пожаловать в DI — удобный инструмент для управления проектами и задачами!
              Войдите в свой аккаунт, чтобы начать планировать проекты, отслеживать прогресс и работать в команде. Все ваши задачи под контролем!
            </p>
          </div>
        }
      </div>
    </div>
  );
};
