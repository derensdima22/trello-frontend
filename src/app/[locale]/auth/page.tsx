import { NO_INDEX_PAGE } from '@/constants';
import { Metadata } from 'next';
import React from 'react';
import Auth from './Auth';

export const metadata: Metadata = {
  title: 'Auth',
  ...NO_INDEX_PAGE
}

const AuthPage = () => {
  return <Auth/>;
};

export default AuthPage;