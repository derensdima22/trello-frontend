'use client';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { authService } from '@/services/auth.service';
import { AuthFromType } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Auth = () => {
  const { register, handleSubmit, reset } = useForm<AuthFromType>({
    mode: 'onChange'
  });
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);
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
  }

  return (
    <div>
      Auth rr
    </div>
  );
};

export default Auth;