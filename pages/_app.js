import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import React, {useEffect, useState} from 'react';
import {Layout} from '../Components';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
