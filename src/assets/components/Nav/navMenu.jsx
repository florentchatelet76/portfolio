import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import medias from "../../../data/medias";

function NavMenu({triggerSwipe, scrollContainerRef, overlayRef}) {
  const navLinksRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const links = [
    {
      label: "HOME",
      to: "/",
      image: medias.find((item) => item.context === "home").image,
    },
    {
      label: "PROJETS",
      to: "/listing",
      image: medias.find((item) => item.context === "home").image,
    },
  ];

  const imgRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      const items = navLinksRef.current.querySelectorAll(".nav__link");

      gsap.fromTo(
        items,
        {
          transform: "translateX(-50%)",
          opacity: 0,
        },
        {
          duration: 1,
          transform: "translateX(0)",
          opacity: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  const handlers = [];

  useEffect(() => {
    // Ajouter listeners à chaque lien
    const linkElements = navLinksRef.current.querySelectorAll(".nav__link");

    linkElements.forEach((link, index) => {
      const imgEl = imgRefs.current[index];
      if (!imgEl) return;

      const handleEnter = () => {
        gsap.to(imgEl, {
          height: "100px",
          y: -50,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(imgEl, {
          transform: "translateY(-10px)",
          duration: 1,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(imgEl, {
          height: "0px",
          y: 0,
          transform: "translateY(0px)",
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(imgEl, {
          transform: "translateY(70px)",
          duration: 1,
          ease: "power2.out",
        });
      };

      link.addEventListener("mouseenter", handleEnter);
      link.addEventListener("mouseleave", handleLeave);

      handlers.push({ link, handleEnter, handleLeave });
      // Clean up
    });

    return () => {
      handlers.forEach(({ link, handleEnter, handleLeave }) => {
        link.removeEventListener("mouseenter", handleEnter);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [isOpen]);

  return (
    <div>
    <div className="nav-mask-layer"></div>  
    <nav className={`navContainer ${isOpen ? "navOpen" : "navClose"}`}>
      <div className="navContainer__inner">
        <div className="menuToggleBtn">
          <button onClick={toggleMenu} className={`menuToggleBtn__inner ${isOpen ? "menuToggleBtn__innerOpen" : "menuToggleBtn__innerClose"}`}>
            <span className="menuToggleBtn__label">
                          {isOpen ? "FERMER" : "MENU"}
            </span>

          </button>
        </div>
          <Link 
          overlayRef={overlayRef}
            scrollContainerRef={scrollContainerRef}
            onClick={(e) => {
              e.preventDefault();            // empêcher le comportement par défaut du lien
              setIsOpen(false);             // ferme le menu
              triggerSwipe(`/`);     // déclenche l’animation + navigation
            }}
          >
        <div className={`logoContainer ${isOpen ? "logoOpen" : "logoClose"}`}>
          <svg
            id="LOGO"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 57.14 148.72"
          >
            <path
              className="cls-2"
              d="M.7,93.65c1.49-11.82,4.08-14.41,6.88-9.26-2.94-7.02-4.06-11.5-4.4-12.66-2.47,14.06-2.47,21.92-2.47,21.92"
            />
            <path
              className="cls-1"
              d="M.46,92.38v-35.7c0-31.05,25.17-56.22,56.22-56.22v35.7c-31.05,0-56.22,25.17-56.22,56.22"
            />
            <path
              className="cls-3"
              d="M.46,92.38c0,30.86,25.02,55.88,55.88,55.88v-36.04C25.48,112.22.46,87.2.46,56.34"
            />
          </svg>
        </div>
        </Link>
      </div>

      <div
        className={`nav__linksContainer ${isOpen ? "linksOpen" : "linksClose"}`}
      >
        <div className="nav__linksContainerInner" ref={navLinksRef}>
          {links.map((link, index) => (
            <div className="nav__link" key={index}>
              <div
                className="nav__imgContainer"
                ref={(el) => (imgRefs.current[index] = el)}
              >
                <div className="nav__imgInner">
                  <img className="nav__img" src={link.image} alt="" />
                </div>
              </div>
              <Link
                className="linkBold textBold"
                scrollContainerRef={scrollContainerRef}
                to={link.to}
                
                onClick={() => setIsOpen(false)}
                
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavMenu;
