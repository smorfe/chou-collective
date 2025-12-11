import React, { useEffect, useRef } from "react";
import NavigationComponent from "../components/Navigation";
import HeroComponent from "../components/Hero";
import { StaticImage } from "gatsby-plugin-image";
import FadeUpSection from "../elements/FadeUpSection";
import FooterComponent from "../components/Footer";

const TemplateHomepage = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!imgRef.current || !containerRef.current) return;

      const img = imgRef.current;
      const container = containerRef.current;

      const containerRect = container.getBoundingClientRect();
      const imgWidth = img.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Only scroll if the container is on screen
      if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        // Calculate how far the container has scrolled into view (0 to 1)
        const scrollProgress = Math.min(
          Math.max(
            (window.innerHeight - containerRect.top) / (window.innerHeight + containerRect.height),
            0
          ),
          1
        );

        // Max translateX so image stays within container
        const maxTranslate = imgWidth - containerWidth;
        img.style.transform = `translateX(-${scrollProgress * maxTranslate}px)`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // recalc on resize
    handleScroll(); // initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <NavigationComponent />
      <main>
        <section className="relative z-10">
          <HeroComponent />
          <section className="py-14 bg-white relative z-10">
            <FadeUpSection>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-y-9 md:gap-9">
                <div className="col-span-12 md:col-span-5">
                  <div
                    ref={ containerRef }
                    className="relative overflow-hidden h-[400px] md:h-[700px] rounded-3xl"
                  >
                    <img
                      ref={ imgRef }
                      src="../images/weaving-image-1.jpg"
                      height={ 700 }
                      alt="Weaving Purposeful Networks - Image 1"
                      className="max-w-[700px] sm:max-w-[1000px] md:max-w-[700px] object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7 self-center">
                  <div className="fade-up">
                    <h2 className="text-4xl sm:text-5xl leading-tight font-heading font-bold uppercase">Weaving Purposeful Networks</h2>
                    <p>
                      Like master artisans, we weave together expertise, vision, and
                      sustainable practices to shape environments where communities
                      flourish.
                    </p>
                    <p>
                      Each project tells a unique story of collaboration between
                      forward-thinking individuals united by a shared ambition:
                      creating spaces and experiences that matter.
                    </p>
                    <p>
                      This is where vision transforms into reality—welcome to our
                      collective.
                    </p>
                  </div>
                </div>

              </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-y-9 md:gap-9 items-end mt-8 md:-mt-9">
                <div className="col-span-12 sm:col-span-6 md:col-span-5">
                  <div className="fade-up">
                    <StaticImage src="../images/weaving-image-2.jpg" alt="Weaving image 2" height={ 363 } className="md:h-[363px] relative overflow-hidden rounded-3xl" />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-7">
                  <div className="fade-up">
                    <StaticImage src="../images/weaving-image-3.jpg" alt="Weaving image 3" height={ 444 } className="md:h-[444px] rounded-3xl relative overflow-hidden" />
                  </div>
                </div>
              </div>
            </FadeUpSection>
          </section>

          <section className="py-6md:py-12 bg-purple text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-4 min-h-[250px] items-center">
              <div className="col-span-12 text-center">
                <FadeUpSection>
                  <h2 className="fade-up tracking-wide text-3xl sm:text-5xl font-heading uppercase font-bold mb-0!">Legacy isn't built. It's curated.</h2>
                </FadeUpSection>
              </div>
            </div>
          </section>

          <section className="bg-grey-light py-16 relative z-10">
            <FadeUpSection>
              <div className="gallery-container max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-5">
                <div className="grid grid-cols-1 gap-5">
                  <div className="gallery-item transition-all fade-up relative overflow-hidden">
                    <StaticImage className="rounded-2xl" src="../images/gallery-1.png" alt="Gallery 1" />
                  </div>
                  <div className="gallery-item transition-all fade-up relative overflow-hidden">
                    <StaticImage className="rounded-2xl" src="../images/gallery-2.png" alt="Gallery 2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <div className="gallery-item transition-all fade-up relative overflow-hidden">
                    <StaticImage className="rounded-2xl" src="../images/gallery-3.png" alt="Gallery 3" />
                  </div>
                  <div className="gallery-item transition-all fade-up relative overflow-hidden">
                    <StaticImage className="rounded-2xl" src="../images/gallery-4.png" alt="Gallery 4" />
                  </div>
                </div>
                <div className="hidden md:grid grid-cols-1 gap-5">
                  <div className="gallery-item transition-all fade-up relative overflow-hidden">
                    <StaticImage className="rounded-2xl" src="../images/gallery-5.png" alt="Gallery 5" />
                  </div>
                  <div className="gallery-item transition-all fade-up relative overflow-hidden">
                    <StaticImage className="rounded-2xl" src="../images/gallery-6.png" alt="Gallery 6" />
                  </div>
                </div>
              </div>
            </FadeUpSection>
          </section>

          <section className="py-14 relative z-10 bg-white">
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <FadeUpSection>
                  <div className="fade-up relative before:content-[''] before:absolute before:w-full before:h-1 sm:before:h-2 before:bg-fuschia before:top-3">
                    <h2 className="bg-white inline-block px-1 sm:px-2.5 tracking-wide text-xl sm:text-3xl font-heading uppercase font-bold mb-0! ml-6 sm:ml-9 relative z-10">Meet the Ensemble</h2>
                  </div>
                </FadeUpSection>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 grid grid-cols-12 gap-y-9 md:gap-9 mt-14 items-end">
              <div className="col-span-12 sm:col-span-5 text-center">
                <FadeUpSection>
                  <StaticImage src="../images/ensemble-image.jpg" alt="Teams image" width={ 410 } className="fade-up rounded-2xl" />
                </FadeUpSection>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <FadeUpSection>
                  <div className="fade-up">
                    <p>
                      The artisans behind Chou Collective bring diverse expertise united by shared purpose. Like musicians in a well-practiced quartet, each member contributes their unique talent while harmonizing with the collective. Led by Phil Chou’s entrepreneurial vision, our ensemble includes creative direction, operational precision, and financial acumen—each voice essential to the composition we create together.
                    </p>
                    <a href="/" className="global-button button ">
                      <span className="relative">
                        Our People
                      </span>
                    </a>
                  </div>
                </FadeUpSection>
              </div>
            </div>
          </section>
        </section>
        <FooterComponent />
      </main>
    </>
  );
};

export default TemplateHomepage;
