'use client';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { authService } from '@/services/auth.service';
import { AuthFromType } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import classNames from 'classnames';
import { AnimationLayoutBox } from './components';

const Auth = () => {
  const { register, handleSubmit, reset } = useForm<AuthFromType>({
    mode: 'onChange'
  });
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<string | null>(null);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: AuthFromType) => authService.main(
      isLoginForm? 'login' : 'register',
      data
    ),
    onSuccess() {
      toast.success('Successfully login!');
      reset();
      push(DASHBOARD_PAGES.HOME)
    }
  });

  const onSubmit: SubmitHandler<AuthFromType> = (data) => {
    mutate(data);
  };

  const handleClick = () => {
    setIsAnimating((isAnimating) => isAnimating === 'auth'? 'register' : 'auth');
  };

  return (
    <div className="text-reveal-container" >
        <AnimationLayoutBox isAnimating={isAnimating}/>

        <h1>Auth</h1>
        <button
            className="reveal-button absolute top-2 left-2 z-50"
            onClick={handleClick}
          >
            {isAnimating === "register"? "Регистрация" : "Авторизация"}
          </button>

        {/* <input
          type="text"
          className={`slide-input ${!isAnimating ? "visible" : ""}`}
          placeholder="Введите текст"
        />
        <br/>
        <input
          type="text"
          className={`slide-input ${!isAnimating ? "visible" : ""}`}
          placeholder="Введите текст"
        /> */}
      
      
      {/* <img
        src="https://via.placeholder.com/150"
        alt="Пример"
        className={`reveal-image ${isRevealed ? "active" : ""}`}
      /> */}
    </div>
  );
};

export default Auth;