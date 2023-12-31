import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <> 
      <Navbar />
      <main  className='bg-white dark:bg-slate-900'>{children}</main>
      <Footer />
      </>
  )
}

export default Layout;