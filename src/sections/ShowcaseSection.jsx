import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/public/images/project1.png"
                alt="CarePulse"
                className="w-full object-cover"
              />
            </div>
            <div className="text-content">
              <h2>Appointments Made Simple with CarePulse</h2>
              <p className="text-white-50 md:text-xl">
                An app Build with React, Framer Motion, TailwindCss and Payment
                Integration for a fast, user-Friendly Experience.
              </p>
            </div>
          </div>
          {/* right */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/public/images/project2.png" alt="" />
              </div>
              <h2>DARA Property Rental Platform</h2>
              <p className="text-white-50 md:text-xl">
                A Property Rental Platform build with NextJs, Django RestAPI,
                TailwindCss.
                <br />
                <span className="text-purple-500 font-semibold">
                  "Click. Rent. Go."
                </span>
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/public/images/project3.png" alt="" />
              </div>
              <h2>Office Management Platform</h2>
              <p className="text-white-50 md:text-xl">
                {" "}
                A Platform build with Django and RestAPI.
                <br />
                <span className="text-blue-300 font-semibold text-sm">
                  "All your office ops. One simple tool."
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
