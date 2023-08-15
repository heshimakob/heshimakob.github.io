import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const dark = true;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? 'light' : theme;

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className='xl:w-1/3 flex items-center justify-center'>
            <Link className='flex items-center' href='/'>
              <img
                className='w-8 h-8 inline-block mr-2 rounded-full'
                src='images/profile.jpeg'
                alt=''
              />
              <span className=' xl:block xl:w-1/3 inline-block text-black-400'>
                Heshimakob
              </span>
            </Link>
           
          </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link className={styles.hover_underline_animation} href='/about'>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link className={styles.hover_underline_animation} href='/contact'>
                    Contacts
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
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
    </div>
  );
}

export default NavBar;
