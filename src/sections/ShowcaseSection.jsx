import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/public/images/project1.png" alt="CarePulse"
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
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/public/images/project2.png" alt="" />
              </div>
              <h2>DARA Property Rental Platform</h2>
              <p>A Property Rental Platform build with NextJs, Django RestAPI, TailwindCss.<br/>
              <span className="text-purple-500 font-semibold">"Click. Rent. Go."</span>
              </p>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/public/images/project3.png" alt="" />
              </div>
              <h2>Office Management Platform</h2>
              <p> A Platform build with Django and RestAPI.<br/>
                <span className="text-blue-300 font-semibold">"All your office ops. One simple tool."</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
