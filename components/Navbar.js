import Link from 'next/link';
const Navbar = () => {
    return ( 
        <section className='bg-white' >
      <nav className='fixed top-0 left-0 w-full flex justify-between p-6 px-4 border-b-1 '
             style={{
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,255,240,1) 0%, rgba(231,250,228,1) 95%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top", 
            }}>
      <div className='flex justify-between items-center w-full'
      >
  <div className='xl:w-1/3 flex items-center justify-center'>
    <Link className='flex items-center' href='/' style={{ marginLeft: '65%' }}>
      <img
        className='w-8 h-8 inline-block mr-2 rounded-full'
        src='images/profile.jpeg'
        alt=''
      />
      <span className='inline-block text-black-400'>Heshimakob</span>
    </Link>
  </div>

  <div className='hidden xl:block xl:w-1/3'style={{ marginRight: '20%' }}>
    <ul className='flex justify-center'>
      <li className='mr-12'>
        <Link className='text-coolGray-500 hover:text-coolGray-900 font-medium' href="/">
          Home
        </Link>
      </li>
      <li className='mr-12'>
        <Link className='text-coolGray-500 hover:text-coolGray-900 font-medium' href='/contact'>
          Contacts
        </Link>
      </li>
    </ul>
  </div>
</div>

      
        </nav>

      </section>
     )
}
 
export default Navbar;