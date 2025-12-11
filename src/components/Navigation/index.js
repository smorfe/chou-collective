import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import IconArrow from "../../elements/IconChevron";

const NavigationComponent = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="sticky top-0 z-50 bg-white w-full shadow-sm overflow-hidden md:overflow-visible py-3 md:py-0">
         <div className="max-w-4xl mx-auto px-4 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4">
               <a href="/">
                  <StaticImage src="../../images/chou-collective-logo.svg" alt="CHOU Collective logo" height={ 64 } />
               </a>
            </div>
            <div className="col-span-8 md:h-full">
               <button
                  type="button"
                  className="block md:hidden ml-auto uppercase font-extrabold tracking-wider"
                  onClick={ () => setIsOpen(true) }
               >
                  Menu
               </button>
               <nav id="navigation" className={ `fixed top-0 text-white right-0 h-full w-full sm:w-[300px] bg-purple md:bg-transparent shadow-xl md:shadow-none transform transition-transform duration-300 md:relative md:translate-x-0 md:h-auto md:flex md:items-center md:justify-end md:w-full ${isOpen ? "translate-x-0" : "translate-x-full"
                  }` }>
                  <button
                     type="button"
                     className="block md:hidden mx-8 my-12 ml-auto"
                     onClick={ () => setIsOpen(false) }
                  >
                     Close
                  </button>
                  <ul className="md:flex md:items-center flex-col md:flex-row md:justify-end gap-2 md:gap-6 h-full">
                     <li className="md:h-full px-6 md:px-0 py-4 md:py-10 content-center"><a href="/" className="uppercase font-bold text-white md:text-purple hover:text-gold transition-colors">Home</a></li>
                     <li className="md:h-full px-6 md:px-0 py-4 md:py-10 content-center"><a href="/" className="uppercase font-bold text-white md:text-purple hover:text-gold transition-colors">Ensemble</a></li>
                     <li className="relative group md:h-full px-6 md:px-0 py-4 md:py-10 content-center">
                        <a href="#" className="uppercase font-bold text-white md:text-purple hover:text-gold transition-colors justify-between flex items-center group-hover:text-gold group-focus-within:text-gold gap-2 leading-normal">Alignments <span className="inline-block transition-transform duration-300 rotate-90 origin-center group-hover:rotate-270 group-focus-within:rotate-270" aria-hidden="true"><IconArrow className="fill-white md:fill-purple" /></span></a>
                        <ul className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-full md:w-2xs md:bg-white md:shadow-2xl md:opacity-0 hidden md:block md:invisible md:group-hover:opacity-100 md:group-hover:block md:group-hover:visible group-hover:block md:group-focus-within:opacity-100 md:group-focus-within:visible group-focus-within:block md:group-focus-within:block transition-all duration-200 z-50 md:mt-0 mt-1.5">
                           <li><a href="#" className="px-2.5 md:px-5 transition-all hover:bg-white md:hover:bg-purple hover:text-purple md:hover:text-white py-2.5 block md:text-purple">CHOU Foundation</a></li>
                           <li><a href="#" className="px-2.5 md:px-5 transition-all hover:bg-white md:hover:bg-purple hover:text-purple md:hover:text-white py-2.5 block md:text-purple">Healthcare</a></li>
                           <li><a href="#" className="px-2.5 md:px-5 transition-all hover:bg-white md:hover:bg-purple hover:text-purple md:hover:text-white py-2.5 block md:text-purple">Real Estate and Development</a></li>
                        </ul>
                     </li>
                     <li className="md:h-full px-6 md:px-0 py-4 md:py-10 content-center"><a href="#" className="uppercase font-bold text-white md:text-purple hover:text-gold transition-colors">Contact Us</a></li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default NavigationComponent;


