import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const dark = true;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? 'light' : theme;

  return (
    <section className=' bg-white responsive'>
    <nav         className='fixed top-0 left-0 w-full flex justify-between p-6 px-4 border-b-1 bg-white-300 dark:bg-slate-900' style={{ backdropFilter: 'blur(10px)', zIndex: '1' }}>
        <div className='flex justify-between items-center w-full dark:bg-slate-900'>
          <div className='xl:w-1/3 flex items-center justify-center'>
            <Link className='flex items-center' href='/'>
              <img
                className='w-8 h-8 inline-block mr-2 rounded-full'
                src='images/profile.jpeg'
                alt=''
              />
              <span className='hidden xl:block xl:w-1/3 inline-block text-black-400'>
                Heshimakob
              </span>
            </Link>
          </div>

          <div className='xl:block xl:w-1/3 md:ml-10 sm:ml-30 justify-right md:justify-right'>
            <div className={styles.topnav}>
              <ul className='flex justify-center '>
                <li className='mr-12'>
                  <Link className={styles.hover_underline_animation} href='/about'>
                    About
                  </Link>
                </li>
                <li className='mr-12'>
                  <Link className={styles.hover_underline_animation} href='/contact'>
                    Contacts
                  </Link>
                </li>
                <li className='mr-12'>
                {currentTheme === 'dark' ? (
  <button className='mr-12 bg-black-700 hover:bg-black w-8 h-8 rounded-full border-green-400 border-2 '
    onClick={() => setTheme('light')}>
    {''}
    <img
        className='w-8 h-8  mr-12 rounded-full'
      src='images/sun.gif'
      alt=''
    />
  </button>
) : (
  <button className='mr-12 bg-white hover:bg-black w-8 h-8 rounded-full border-green-400 border-2 '
    onClick={() => setTheme('dark')}>
    {''}
    <img
      className='w-8 h-8  mr-12 rounded-full'
      src='images/moon.gif'
      alt=''
    />
  </button>
)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;