// `pages/_app.js`
import '../styles/global.css';
import Layout from '../components/Layout';

import NextNProgress from 'nextjs-progressbar';
//import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  //const [isLoading, setIsLoading] = useState(false);
  return  ( 
    <>   
< NextNProgress  
color = "rgb(2,0,36)" 
startPosition = { 1 }  
stopDelayMs = { 200 }  
height = { 7 }  
showOnShallow = { true }  
/ >
  <Layout>  <Component {...pageProps} /></Layout>
  </>
  ) 

}