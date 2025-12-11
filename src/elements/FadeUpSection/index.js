import React, { useEffect, useRef } from "react";

const FadeUpSection = ({ children, ...props }) => {
   const ref = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
               } else {
                  entry.target.classList.remove("visible");
               }
            });
         },
         { threshold: 0.1 }
      );

      const current = ref.current;
      if (current) {
         current.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
      }

      return () => {
         if (current) {
            current.querySelectorAll(".fade-up").forEach((el) => observer.unobserve(el));
         }
      };
   }, []);

   return <div ref={ ref } { ...props }>{ children }</div>;
};

export default FadeUpSection;
