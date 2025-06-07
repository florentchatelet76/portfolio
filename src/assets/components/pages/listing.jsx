import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import listingProjects from "../../../data/listingProjects";
import gsap from "gsap";

function Listing({ triggerSwipe }) {
  const listingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const items = listingRef.current.querySelectorAll(".projectPreview");

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
    <div ref={listingRef} className="listing listingContainer">
      {listingProjects.map((project) => (
        <div
          key={project.id}
          className="projectPreviewContainer projectPreview contentSpacing"
        >
          <div className="projectPreview__inner">
            <div className="projectPreview__imgContainer">
              <div className="projectPreview__imgContainerInner">
                <img
                  className="projectPreview__img"
                  src={project.image}
                  alt=""
                />
              </div>
            </div>
            <div className="projectPreview__infosContainer infos">
              <div className="infos__TitleContainer">
                <h2 className="TitleH2 textBold titlePrimaryColor">{project.title}</h2>
              </div>

              <div className="infos__descriptionContainer lineHeight">
                <p>{project.descriptionPreview}</p>
              </div>
              <div className="rolesContainer roles">
                {project.roles &&
                  project.roles.map((role, index) => (
                    <p className="roles__roleText" key={index}>
                      {role}
                    </p>
                  ))}
              </div>
              <a
                className="seeProjectLink primaryButton"
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
      ))}
    </div>
  );
}

export default Listing;
