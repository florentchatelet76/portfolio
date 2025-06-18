import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import listingProjects from "../../../data/listingProjects";
import CenteredText from "../parts/centeredText";
import Paragraph from "../parts/paragraph";
import ImgFull from "../parts/imgFull";
import ImageText from "../parts/imgText";
import GallerySmall from "../parts/gallerySmall";
import TwoImgText from "../parts/twoImgText";
import List from "../parts/List";
import { useRef, useEffect } from "react";
import mediaSVG from "../../../data/mediaSVG";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// mapping “type” → composant
const COMPONENTS = {
  CenteredText,
  Paragraph,
  ImgFull,
  ImageText,
  GallerySmall,
  TwoImgText,
  List,
};

function Project({ triggerSwipe, scrollContainerRef, overlayRef }) {
  const { id } = useParams(); // on récupère `:id`
  const project = listingProjects.find((p) => p.id === id);
  if (!project) return <p>Projet introuvable</p>;

  const headImgContainerRef = useRef(null);
  const headImgRef = useRef(null);
  const previousProjectRef = useRef(null);
  const contentRef = useRef(null);

  //FIN TRANSITIOPN

  useEffect(() => {
    if (!overlayRef?.current) return;

    gsap.set(overlayRef.current, { yPercent: 100 });

    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.1,
    }).to(overlayRef.current, {
      yPercent: -200,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.1,
    });
  }, []);

  // Timeline d'entrée avec délai de 1s
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headImgContainerRef.current,
      { height: "0%", top: "100%" },
      { height: "100%", top: "0%", duration: 1, ease: "power2.inOut" }
    );

    tl.fromTo(
      headImgRef.current,
      { bottom: "-100%" },
      { bottom: "0%", duration: 1, ease: "power2.inOut" },
      "<+0.2"
    );

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "<+0.2"
    );
  }, [id]);

  //----------- HEADIMG PARALLAX SCROLL
  useEffect(() => {
    if (!headImgRef.current || !scrollContainerRef?.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headImgRef.current,
        { y: "0rem" },
        {
          y: "5rem",
          ease: "linear",
          scrollTrigger: {
            trigger: headImgRef.current,
            start: "top top", 
            end: "bottom top", 
            scrub: true,
            scroller: scrollContainerRef.current,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [scrollContainerRef]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentIdNumber = parseInt(id, 10);
  const nextId = String(currentIdNumber + 1);
  const nextProject = listingProjects.find((item) => item.id == nextId);
  const prevId = String(currentIdNumber - 1);
  const prevProject = listingProjects.find((item) => item.id == prevId);

  console.log("prevProject", prevProject);
  console.log("nextProject", nextProject);

  const iconLink = mediaSVG.find((item) => item.name === "icon-link");

  //--------- HOVER NAV PREV ET NEXT

  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);

  return (
    <div className="projectContainer project" ref={contentRef}>
      <div className="project__headImgContainer">
        <div
          ref={headImgContainerRef}
          className="project__headImgContainerInner"
        >
          <div className="project__headImgGradient"></div>
          <img
            ref={headImgRef}
            className="project__headImg"
            src={project.image}
            alt=""
          />
          <div className="projectTitle contentPaddingLR mg-b-24">
            <h1 className="TitleH1 textBold">{project.title}</h1>
          </div>
        </div>
      </div>
      <div className="projectHeadContent">
        <a target="_blank" href={project.link} className=" p-primColor">
          <div className="projectHeadContent__link primaryButton">
            <p className="p-primColor">Lien</p>
            <svg
              className="projectHeadContent__linkIcon"
              id="Calque_1"
              data-name="Calque 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22.86 24.85"
            >
              <path
                className="cls-link2"
                d="M18.56.79c1.79-.91,3.9.46,3.79,2.47l-.65,11.91-.37,6.7c-.15,2.67-3.73,3.42-4.94,1.04l-3.5-6.91c-.42-.83-1.26-1.38-2.19-1.43l-7.73-.42c-2.67-.15-3.42-3.73-1.04-4.94l5.98-3.03L18.56.79Z"
              />
              <path
                className="cls-link1"
                d="M18.69,24.85c-1.15,0-2.18-.63-2.73-1.71l-3.5-6.91c-.34-.67-1.02-1.11-1.77-1.15l-7.73-.42c-1.45-.08-2.58-1.05-2.88-2.47-.3-1.42.34-2.76,1.64-3.42L18.34.34c1-.51,2.17-.45,3.11.17.94.61,1.47,1.65,1.41,2.78l-1.02,18.61c-.08,1.45-1.05,2.58-2.47,2.88-.23.05-.46.07-.68.07ZM19.75,1c-.33,0-.65.08-.96.23L2.16,9.66c-1.07.54-1.27,1.59-1.11,2.32.15.73.76,1.61,1.95,1.67l7.73.42c1.11.06,2.1.71,2.61,1.7l3.5,6.91c.54,1.07,1.59,1.26,2.32,1.11.73-.15,1.61-.76,1.67-1.95l1.02-18.61c.04-.76-.32-1.47-.96-1.88-.35-.23-.75-.35-1.15-.35Z"
              />
            </svg>
          </div>
        </a>
        <div className="projectHeadContent__textContainer p-primColor">
          <div className="projectHeadContent__description ">
            {project.descriptions &&
              project.descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
          </div>
          <div className="projectHeadContent__specifics p-primColor">
            <div className="projectHeadContent__roleTitle sticker">
              <p className="smallUpperCase textBold">Rôle</p>
            </div>
            <div className="projectHeadContent__roles">
              {project.roles &&
                project.roles.map((role, index) => (
                  <p
                    className="smallUpperCase textBold textMarginBottomSmall"
                    key={index}
                  >
                    {role}
                  </p>
                ))}
            </div>

            <div className="projectHeadContent__technologies">
              <div className="projectHeadContent__technologiesTitle sticker">
                <p className="smallUpperCase textBold">Technologies</p>
              </div>
              {project.technologies &&
                project.technologies.map((technologie, index) => (
                  <p
                    className="smallUpperCase textLight textMarginBottomSmall"
                    key={index}
                  >
                    {technologie}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>




      {project.content.map((block, index) => {
        const Component = COMPONENTS[block.type];
        if (!Component) {
          console.warn(`pas de bloc flexible pour "${block.type}"`);
          return null;
        }
        return <Component key={index} {...block.props} />;
      })}




      <div className="navProjects contentSpacing">
        {prevProject && (
          <div
            onMouseEnter={() => setIsHoveredPrev(true)}
            onMouseLeave={() => setIsHoveredPrev(false)}
            className="navProjects__linkContainer rowReverse"
          >
            <div className="navProjects__circleContainer flexEnd">
              <div className="navProjects__circleContainerInner">
                <div
                  className={`navProjects__prevCircle ${
                    isHoveredPrev ? "navProjects__prevCircle--over" : ""
                  }`}
                >
                  <div className="circle">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                triggerSwipe(`/projects/${prevId}`);
              }}
              to={`/projects/${prevId}`}
            >
              <div className="navProjects__linkContainerInner">
                <div ref={previousProjectRef}>
                  <p className="p-white">Projet précedent</p>
                  <h3 className="TitleH3 p-white">{prevProject.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        )}

        {nextProject && (
          <div
            onMouseEnter={() => setIsHoveredNext(true)}
            onMouseLeave={() => setIsHoveredNext(false)}
            className="navProjects__linkContainer"
          >
            <div className="navProjects__circleContainer">
              <div className="navProjects__circleContainerInner">
                <div
                  className={`navProjects__nextCircle ${
                    isHoveredNext ? "navProjects__nextCircle--over" : ""
                  }`}
                >
                  <div className="circle">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                triggerSwipe(`/projects/${nextId}`);
              }}
              to={`/projects/${nextId}`}
            >
              <div className="navProjects__linkContainerInner">
                <div>
                  <p className="p-white">Projet suivant</p>
                  <h3 className="TitleH3 p-white">{nextProject.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        )}
        {/* <Link
          onClick={(e) => {
            e.preventDefault();
            triggerSwipe(`/listing`);
          }}
          to="/listing"
        >
          Retour à la galerie
        </Link> */}
      </div>
    </div>
  );
}

export default Project;
