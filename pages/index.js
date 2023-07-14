import Head from "next/head";
import Link from "next/link";
import styles from "./Index.module.css"
const Home = () => {
  return (  
    
    <section>
    <div className="skew skew-top mr-for-radius">
      <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
      </svg>
    </div>
    <div className="skew skew-top ml-for-radius">
      <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
      </svg>
    </div>
    <div className="py-20 bg-gray-50 radius-for-skewed">
      <div className="container mx-auto px-4">
        <img className="mx-auto" src="atis-assets/illustrations/pablo.png" alt="" />
        <div className="text-center">
          <span className="mb-6 text-4xl text-red-600 font-bold">Oups !</span>
          <h3 className="mb-2 text-4xl font-bold">
Sorry we are undergoing maintenance
</h3>
          <p className="mb-8 text-gray-400">Please contact us on our email: <a href="https://mail.google.com/mail/u/0/#inbox">Writte me</a></p>
          <div>
            <Link className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose text-gray-50 bg-red-500 hover:bg-red-700" href="/contact" >See my contacts </Link>
            <Link className="w-full lg:w-auto inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose bg-white hover:bg-gray-50" href="/"></Link>
          </div>
        </div>
      </div>
    </div>
   
  </section>
  
  );
}
 
export default Home;