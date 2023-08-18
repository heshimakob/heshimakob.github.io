import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
    });
  }, []);
  return (  
    <main className="main">
       <section
        className='py-24 md:pb-28 bg-gray-100 dark:bg-slate-800'
        style={{
          //backgroundImage: 'url("images/hello.jpg")',
          backgroundPosition: 'center',
        }}
      >
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full lg:w-1/2 px-4 mb-10 lg:mb-0'>
              <div className='relative h-full overflow-hidden max-w-max mx-auto rounded-md' data-aos="fade-up" data-aos-delay="200">
                <button className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full'>
                  <svg
                    className='ml-1'
                    width={17}
                    height={20}
                    viewBox='0 0 17 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.5 9.13001L1.50001 1.05001C1.34799 0.962237 1.17554 0.916031 1.00001 0.916031C0.824471 0.916031 0.652027 0.962237 0.500008 1.05001C0.347404 1.13811 0.220789 1.26497 0.132986 1.41775C0.0451825 1.57053 -0.000691684 1.7438 7.88292e-06 1.92001V18.08C-0.000691684 18.2562 0.0451825 18.4295 0.132986 18.5823C0.220789 18.735 0.347404 18.8619 0.500008 18.95C0.652027 19.0378 0.824471 19.084 1.00001 19.084C1.17554 19.084 1.34799 19.0378 1.50001 18.95L15.5 10.87C15.6539 10.7828 15.7819 10.6563 15.871 10.5035C15.96 10.3506 16.007 10.1769 16.007 10C16.007 9.82311 15.96 9.64938 15.871 9.49654C15.7819 9.3437 15.6539 9.21722 15.5 9.13001ZM2.00001 16.35V3.65001L13 10L2.00001 16.35Z'
                      fill='white'
                    />
                  </svg>
                </button>
          
                <img
                  src='images/profile.jpeg'
                  alt=''
                />
               
               
              </div>
            </div>
            <div className='w-full lg:w-1/2 px-4'>
              <span className='inline-block py-px px-2 sm:ml-6 md:mb-16 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl'>
               Sourir
              </span>
              <div className='relative pt-12 pb-6 sm:p-6 mb-8'>
                <img
                  className='absolute top-0 left-0'
                  src='flex-ui-assets/elements/testimonials/quote-top-green.svg'
                  alt=''
                />
                <img
                  className='absolute bottom-0 right-0'
                  src='flex-ui-assets/elements/testimonials/quote-down-green.svg'
                  alt=''
                />
                <div className='relative'>
                  <h2 className='text-2xl md:text-4xl font-semibold tracking-tighter'>
                  A better solution for any type of technological creativity
                  </h2>
                </div>
              </div>
              <div className='sm:px-6 mb-14'>
                <h3 className='mb-2 text-xl md:text-2xl font-semibold'>
                  HESHIMA MAGALABAHA Ezra
                </h3>
                <span className='text-lg text-coolGray-500 font-medium'>
                  CEO &amp; Founder at Fluid Corporation
                </span>
              </div>
              <div className='sm:px-6'>
                <button className='inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100' />
                <button className='inline-block h-3 w-3 mr-3 rounded-full bg-green-500' />
                <button className='inline-block h-3 w-3 rounded-full bg-coolGray-100' />
              </div>
            </div>
          </div>
        </div>
      </section>
    <section
        className='py-24 bg-white overflow-hidden dark:bg-slate-700'
        style={{
         
          backgroundPosition: 'center',
        }}
      >
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0' data-aos="fade-up" data-aos-delay="200">
              <div className='relative mx-auto md:ml-0 max-w-max'>
                <img
                  className='absolute z-10 -right-8 -top-8 w-28 md:w-auto'
                  //src='images/yello-circle.svg'
                  alt=''
                />
                <img
                  className='absolute z-10 -left-10 -bottom-8 w-28 md:w-auto'
                  src='flex-ui-assets/elements/dots3-blue.svg'
                  alt=''
                />
                <img
                  src='images/code.png'
                  alt=''
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 px-4'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
              take advantage of our services
              </span>
              <h2 className='mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter'>
              We offer design and creative services:
              </h2>
              <div className='flex flex-wrap -mx-4 text-center md:text-left'>
                <div className='w-full md:w-1/2 px-4 mb-8' data-aos="fade-up" data-aos-delay="200">
                  <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full'>
                    1
                  </div>
                  <h3 className='mb-2 text-xl font-bold'>Mobile App</h3>
                  <p className='font-medium text-coolGray-500'>
                  We create all types of android, ios and cross-platform mobile applications
                  </p>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-8' data-aos="fade-up" data-aos-delay="200">
                  <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full'>
                    2
                  </div>
                  <h3 className='mb-2 text-xl font-bold'>Web App</h3>
                  <p className='font-medium text-coolGray-500'>
                  Applications accessible via the browser on the internet and on the local server
                  </p>
                </div>
                <div className='w-full md:w-1/2 px-4 mb-8' data-aos="fade-up" data-aos-delay="200">
                  <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full'>
                    3
                  </div>
                  <h3 className='mb-2 text-xl font-bold'>Web site</h3>
                  <p className='font-medium text-coolGray-500'>
                  We create dynamic websites, showcase websites and sales websites
                  </p>
                </div>
                <div className='w-full md:w-1/2 px-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-green-500 font-semibold rounded-full'>
                    4
                  </div>
                  <h3 className='mb-2 text-xl font-bold'>Data analytics and network</h3>
                  <p className='font-medium text-coolGray-500'>
                  collection, analysis, data processing and installation, network configuration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='py-20 xl:pt-24 bg-white dark:bg-slate-900'
       
      >
        <div className='container px-4 mx-auto bg-blue'>
          <h3 className='mb-8 text-center font-medium leading-6 text-coolGray-300'>
          Our skills in programming languages
          </h3>
          <div className='flex flex-wrap justify-center -mx-4'>
            <div className='w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0' data-aos="fade-up" data-aos-delay="200">
              <img
                className='mx-auto'
                src='images/react.png'
                alt=''
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0' data-aos="fade-up" data-aos-delay="200">
              <img
                className='mx-auto'
                src='images/next.png'
                alt=''
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0' data-aos="fade-up" data-aos-delay="200">
              <img
                className='mx-auto'
                src='images/tail.png'
                alt=''
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0' data-aos="fade-up" data-aos-delay="200">
              <img
                className='mx-auto'
                src='images/sql.png'
                alt=''
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-1/5 px-4' data-aos="fade-up" data-aos-delay="200">
              <img
                className='mx-auto'
                src='images/php.png'
                alt=''
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-1/5 px-4' data-aos="fade-up" data-aos-delay="200">
              <img
                className='mx-auto'
                src='images/python.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
 
export default About;