import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Erreur = () => {
    const router = useRouter();
    useEffect (()=>{
        setTimeout(()=>{
           // router.go(-1)
           router.push("/");

        },3000)

    },[])
    return ( 
        <section>
        <div className="skew skew-top mr-for-radius bg-white dark:bg-slate-800">
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
              <span className="mb-6 text-4xl text-green-600 font-bold">Oups !</span>
              <h3 className="mb-2 text-4xl font-bold">Quelque chose s'est mal passé !</h3>
              <p className="mb-8 text-gray-400">Désolé, mais nous ne pouvons pas ouvrir cette page</p>
              <div>
                <Link className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose text-gray-50 bg-green-600 hover:bg-green-700" href="/" >Retournez à la page d'accueil </Link>
                <Link className="w-full lg:w-auto inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose bg-white hover:bg-gray-50" href="/"></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>
      
     );
}
 
export default Erreur;