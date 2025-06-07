import { useParams, Link } from "react-router-dom";
import listingProjects from "../../../data/listingProjects";
import CenteredText from "../parts/centeredText";
import Paragraph from "../parts/paragraph";
import ImgFull from "../parts/imgFull";
import ImageText from "../parts/imgText";
import GallerySmall from "../parts/gallerySmall";
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
};

function Project({ triggerSwipe }) {
  const { id } = useParams(); // on récupère `:id`
  const project = listingProjects.find((p) => p.id === id);
  if (!project) return <p>Projet introuvable</p>;

  const headImgContainerRef = useRef(null);
  const headImgRef = useRef(null);
  const elementRef = useRef(null);
  const contentRef = useRef(null);

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
      { bottom: "-50%", duration: 1, ease: "power2.inOut" },
      "<+0.2"
    );

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "<+0.2"
    );
  }, [id]);

  // ScrollTrigger pour le lien suivant
  useEffect(() => {
    const anim = gsap.fromTo(
      elementRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top bottom",
          end: "top 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
    const rId = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => {
      clearTimeout(rId);
      anim.kill();
      anim.scrollTrigger?.kill();
    };
  }, [id]);

  // Log scroll (inchangé)
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
  const prevId = String(currentIdNumber - 1);
  const iconLink = mediaSVG.find((item) => item.name === "icon-link");

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
          <h1 className="TitleH1 projectTitle contentPaddingLR textBold">
            {project.title}
          </h1>
        </div>
      </div>
      <div className="projectHeadContent">
        <div className="projectHeadContent__link">
          <a href="">Lien</a>
          <img
            className="projectHeadContent__linkIcon mr-8"
            src={iconLink.media}
            alt=""
          />
        </div>
        <div className="projectHeadContent__textContainer">
          <div className="projectHeadContent__description">
            {project.descriptions &&
              project.descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
          </div>
          <div className="projectHeadContent__specifics">
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
          console.warn(`No component for block type "${block.type}"`);
          return null;
        }
        return <Component key={index} {...block.props} />;
      })}
      <div className="navLinkContainer">
        {prevId > 0 && <Link to={`/projects/${prevId}`}>Projet Précédent</Link>}
        <div ref={elementRef}>
          <Link to={`/projects/${nextId}`}>Projet suivant</Link>
        </div>

        <Link to="/listing">Retour à la galerie</Link>
      </div>
    </div>
  );
}

export default Project;
