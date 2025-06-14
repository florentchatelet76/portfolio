import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import listingProjects from "../../../data/listingProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function Listing({ triggerSwipe, scrollContainerRef, overlayRef }) {
  const listingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const items = listingRef.current.querySelectorAll(".projectPreviewref");

    gsap.fromTo(
      items,
      {
        transform: "translateX(-20%)",
        opacity: 0,
      },
      {
        duration: 0.6,
        transform: "translateX(0)",
        opacity: 1,
        stagger: 0.2, // décale chaque item de 0.2s par rapport au précédent
      }
    );
  }, []);

  // Gestion du clic avec transition
  const handleClick = (projectId) => (e) => {
    e.preventDefault(); // empêche la navigation immédiate
    triggerSwipe(() => {
      navigate(`/projects/${projectId}`); // on navigue après le swipe
    });
  };

  return (
    <div ref={listingRef} className="listing listingContainer contentSpacing">
      {listingProjects.map((project, index) => (
        <div key={index} className="projectPreviewref">
          <div
            key={project.id}
            className="projectPreviewContainer projectPreview "
          >
            <div
              className={` projectPreview__inner ${
                project.id % 2 == 0 ? "" : " rowReverse"
              }`}
            >
              <div className="projectPreview__imgContainer">
                <div className="projectPreview__imgContainerInner">
                  <div className="projectPreview__specifics">
                    <div className="projectPreview__specificsInner">
                      {project.technologies &&
                        project.technologies.map((technologie, index) => (
                          <p className="smallUpperCase " key={index}>
                            {technologie}
                          </p>
                        ))}
                    </div>
                  </div>
                  <img
                    className="projectPreview__img"
                    src={project.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="projectPreview__infosContainer infos p-primColor">
                <div className="infos__text">
                  <div className="infos__date">
                    <p className="">{project.year}</p>
                  </div>
                  <div className="infos__TitleContainer mg-t-8">
                    <h2 className="TitleH2 textBold titlePrimaryColor">
                      {project.title}
                    </h2>
                  </div>

                  <div className="infos__descriptionContainer mg-t-16 lineHeight">
                    <p className="p">{project.descriptionPreview}</p>
                  </div>
                </div>

                {/* <div className="rolesContainer roles">
                {project.roles &&
                  project.roles.map((role, index) => (
                    <p className="roles__roleText" key={index}>
                      {role}
                    </p>
                  ))}
              </div> */}
                <a
                  className="seeProjectLink primaryButton"
                  scrollContainerRef={scrollContainerRef}
                  overlayRef={overlayRef}
                  href={`/projects/${project.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    triggerSwipe(`/projects/${project.id}`);
                  }}
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
          <div
            className={` listingBetweenContentGraphic ${
              project.id % 2 == 0
                ? "flexEnd circleRight"
                : "flexStart circleLeft"
            }`}
          >
            <div className="listingBetweenContentGraphic__inner">
              <div className="circle">
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listing;
