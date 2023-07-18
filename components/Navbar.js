import Link from 'next/link';
import styles from './Navbar.module.css';
const Navbar = () => {
    return ( 
        <section className='bg-white responsive' >
      <nav className='fixed top-0 left-0 w-full flex justify-between p-6 px-4 border-b-1 bg-white ' style={{ backdropFilter: 'blur(10px)', 
      zIndex: '1'}}>
      <div className='flex justify-between items-center w-full'
      >
  <div className='xl:w-1/3 flex items-center justify-center'>
      
    <Link className='flex items-center' href='/'>
      <img
        className='w-8 h-8 inline-block mr-2 rounded-full'
        src='images/profile.jpeg'
        alt=''
      />
      <span className='hidden xl:block xl:w-1/3 inline-block text-black-400'>Heshimakob</span>
    </Link>
  </div>

  <div className=' xl:block xl:w-1/3 justify-right'>
    <div className={styles.topnav}>
    <ul className='flex justify-center'>
      <li className='mr-12'>
        <Link className={styles.hover_underline_animation} href="/about">
          About
        </Link>
      </li>
      <li className='mr-12'>
        <Link className={styles.hover_underline_animation} href='/contact'>
          Contacts
        </Link>
      </li>
    </ul>
    </div>
  </div>
</div>

      
        </nav>

      </section>
     )
}
 
export default Navbar;