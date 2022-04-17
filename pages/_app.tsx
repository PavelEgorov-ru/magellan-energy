import '../styles/global.css';
import React from 'react';
import Head from 'next/head';
import { Htag, Button } from '../components';
import PhoneIcon from '../public/telephone-fill.svg';
import { withLayout } from '../layout/Layout';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
