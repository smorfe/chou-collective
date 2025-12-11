import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import FadeUpSection from "../../elements/FadeUpSection";

const HeroComponent = () => {
   return (
      <section data-hero className="md:min-h-(--banner-height) sticky top-0 z-10">
         <FadeUpSection>
            <div className="absolute z-10 inset-0 bg-black/30"></div>

            <StaticImage src="../../images/homepage-banner-image.jpg" alt="Homepage Banner Image" className="aspect-video absolute! top-0 w-full h-full" />
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 md:gap-4 relative z-10 h-full md:min-h-(--banner-height) items-center justify-center py-12 md:py-9">
               <div className="col-span-10 col-start-2 text-center text-white">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase font-heading">Chou Collective</h1>
                  <p className="text-lg! text-balance">Not just building business, but cultivating ecosystem where innovation and pupose thrive together.</p>
               </div>
            </div>
         </FadeUpSection>
      </section>
   )
}

export default HeroComponent;