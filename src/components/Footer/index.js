import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const FooterComponent = () => {
   const year = new Date().getFullYear();

   return (
      <footer className="bg-purple py-10 z-0 text-white sticky bottom-0">
         <div className="max-w-2xl mx-auto px-4 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 sm:col-span-3 text-center">
               <a href="/">
                  <StaticImage src="../../images/footer-logo.svg" alt="CHOU Collective logo" height={ 75 } />
               </a>
            </div>
            <div className="col-span-12 sm:col-span-9 text-center sm:text-left mt-6 sm:mt-0">
               <p className="text-gold uppercase text-2xl! md:text-4xl! font-bold font-heading tracking-wider">Let's Connect</p>
               <p className="text-sm!">Every great collaboration begins with a simple connection. If you'd like to connect, please contact us at: connect@chou.ca</p>

               <div>
                  <p className="text-sm! font-bold mb-1!">Chou Collective</p>
                  <address className="not-italic text-sm mb-0.5">
                     201 - 1965 W 4th Ave <br />
                     Vancouver, B.C. V6J 1M8
                  </address>
                  <a href="mailto:connect@chou.ca" className="text-sm">connect@chou.ca</a>
               </div>
            </div>
         </div>

         <div className="max-w-2xl mx-auto px-4 grid grid-cols-12 mt-9">
            <div className="col-span-12 text-center">
               <p className="text-sm!">© { year } Chou Collective - Created by Chops Consulting</p>

               <a href="/" className="uppercase text-sm">Privacy Policy</a>
            </div>
         </div>
      </footer>
   )
}

export default FooterComponent