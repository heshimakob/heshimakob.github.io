const Art1=()=>{
    return(
        <section
          className="py-24  dark:bg-slate-900 bg-white"
          style={{
        
            //background: "rgb(2,0,36)",
          //  background:
              //"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,240,239,1) 0%, rgba(231,250,228,1) 95%)",
           // backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
          }}
        >
          <div className="container px-4 mx-auto dark:bg-slate-900">
            <div className="md:max-w-5xl mx-auto mb-16 text-left  dark:bg-slate-900">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
                Articles
              </span>
              <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter text-align-left">
                Our mission <span className="text-green-300 "> is to make knowledge and news accessible for
                everyone.</span> 
              </h3>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                With our integrated CRM, project management, collaboration and
                invoicing capabilities, you can manage your business in one
                secure platform.
              </p>
              
              <div className="flex flex-wrap -mx-4 mb-12 md:mb-20 bg-white text-left p-5  dark:bg-slate-900">
              <div className="w-full md:w-1/2 px-4 mb-8 bg-white rounded-md  p-10  dark:bg-slate-900" data-aos="fade-up" data-aos-delay="200">
              <Link className="block mb-6 overflow-hidden rounded-md text-left bg-white" href="#">
                <img className="w-full h-[200px] object-cover  rounded-xl"  src="images/images.jpeg" />
                </Link>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-initial mb-8">
                      <p className="mb-3 text-xs text-gray-500 font-semibold">3 days ago</p>
                      <div className={styles.lien}>
                      <Link className={styles.hover_underline_animation}  href="#">hackathon, meta in the city of Goma / DRC, implementation of an application 
                      for reading and viewing 3D objects and augmented reality </Link>
                    </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 bg-white  dark:bg-slate-900 rounded-md  p-5" data-aos="fade-up" data-aos-delay="200">
              <Link className="block mb-6 overflow-hidden rounded-md text-left " href="#">
                <img className="w-full h-[200px] object-cover  rounded-xl"  src="images/imagess.jpeg" />
                </Link>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-initial mb-8">
                      <p className="mb-3 text-xs text-gray-500 font-semibold">6 months ago</p>
                      <div className={styles.lien}>
                      
                      <Link className={styles.hover_underline_animation}  href="#"> Unicef ​​hackathon project in partnership with rabshstability,
                       on nutrition exposure: a cpn management app</Link>
          
                    </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 bg-white  dark:bg-slate-900 rounded-md p-5" data-aos="fade-up" data-aos-delay="200" >
              <Link className="block mb-6 overflow-hidden rounded-md text-left " href="#">
                <img className="w-full h-[200px] object-cover  rounded-xl"  src="images/imag.jpeg" />
                </Link>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-initial mb-8">
                      <p className="mb-3 text-xs text-gray-500 font-semibold">8 months ago</p>
                      <div className={styles.lien}>
                      <Link  className={styles.hover_underline_animation}  href="#"> University license research work, setting up a network driven by software developed in python</Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 bg-white  dark:bg-slate-900 rounded-md p-5" data-aos="fade-up" data-aos-delay="200">
              <Link className="block mb-6 overflow-hidden rounded-md text-left bg-white" href="#">
                <img className="w-full h-[200px] object-cover  rounded-xl"  src="images/meta.jpg" />
                </Link>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-initial mb-8">
                      <p className="mb-3 text-xs text-gray-500 font-semibold">1 year ago</p>
                      <div className={styles.lien}>
                      <Link className={styles.hover_underline_animation} href="#">wit-xr studio hackathon, Goma/DRC on augmented reality and mixed reality, application designed Afrika jungle.</Link>
                    </div>
                    </div>


                  </div>
                </div>
              </div>
              <div className='w-full lg:w-auto text-center'>
              <Link
                className='inline-block py-4 px-6 w-full md:w-auto text-lg leading-6 text-white-100 font-medium text-center bg-green-300 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm'
                href='#'
              >
                Read more
              </Link>
            </div>
            </div>
            </div>
            </div>
        </section>

    )
}