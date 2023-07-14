// `pages/_app.js`
import '../styles/global.css';
import Layout from '../components/Layout';
import Router from 'next/router'
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  return   <Layout>  <Component {...pageProps} /></Layout>

}