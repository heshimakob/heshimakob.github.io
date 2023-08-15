// `pages/_app.js`
import '../styles/global.css';
import Layout from '../components/Layout';

import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
//import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  //const [isLoading, setIsLoading] = useState(false);
  return  ( 
    <>   
< NextNProgress  
color = "#3b87a7" 
startPosition = { 1 }  
stopDelayMs = { 500 }  
height = { 8 }  
showOnShallow = { true }  
/ >
  <ThemeProvider  enableSystem={true} attribute='class'>
  <Layout>  <Component  {...pageProps} /></Layout>
  </ThemeProvider>
 
  </>
  ) 

}