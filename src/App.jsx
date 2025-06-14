import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";


import { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";

import Footer from "./assets/components/footer";
import NavMenu from "./assets/components/Nav/navMenu";
import Listing from "./assets/components/pages/listing";
import Project from "./assets/components/pages/project";
import MainContent from "./assets/components/pages/main";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function App() {

  
  useEffect(() => {
  const triggers = ScrollTrigger.getAll();
  console.log("Nombre de ScrollTrigger actifs :", triggers.length);
}, []);

  //------------GSAP SCROLL PARALAX
  console.log("gsap : "+gsap);
  const scrollContainerRef = useRef(null);
  const scrollbar = useRef(null);

  // Initialisation Smooth Scrollbar + ScrollTrigger POUR EVITER LE SCROLL SUR X
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    // Init Smooth Scrollbar
    // scrollbar.current = Scrollbar.init(scrollContainerRef.current, {
    //   damping: 0.1,
    //   alwaysShowTracks: true,
    // });

  //   // MAJ du ScrollTrigger
  //   scrollbar.current.addListener(() => {
  //     const scrollContent =
  //       scrollContainerRef.current?.querySelector(".scroll-content");

  //     if (scrollContent && scrollContent.style.transform) {
  //       const matchY = scrollContent.style.transform.match(
  //         /translate3d\([^,]+,\s*([^,]+),/
  //       );
  //       const translateY = matchY ? matchY[1] : "0px";
  //       scrollContent.style.transform = `translate3d(0px, ${translateY}, 0px)`;
  //     }

  //     ScrollTrigger.update();
  //   });

  //   // ScrollTrigger proxy pour Smooth Scrollbar
  //   ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
  //     scrollTop(value) {
  //       if (!scrollbar.current) return 0; // <-- protection si scrollbar non dispo
  //       if (arguments.length) {
  //         scrollbar.current.scrollTop = value;
  //       }
  //       return scrollbar.current.scrollTop;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       };
  //     },
  //     pinType: scrollContainerRef.current.style.transform
  //       ? "transform"
  //       : "fixed",
  //   });

  //   // Refresh ScrollTrigger après setup
  //   ScrollTrigger.addEventListener("refresh", () => scrollbar.current.update());
  //   ScrollTrigger.refresh();

  //     // 💡 Ajout d’un refresh différé
  // const handleReady = () => {
  //   console.log("Images et Scrollbar prêts, refresh forcé");
  //   setTimeout(() => {
  //     scrollbar.current?.update();
  //     ScrollTrigger.refresh(true);
  //     console.log("handeready");
  //   }, 100);
  // };
  // if (document.readyState === "complete") {
  //   handleReady();
  // } else {
  //   window.addEventListener("load", handleReady);
  // }
  //   // Cleanup
  //   return () => {
  //   window.removeEventListener("load", handleReady);
  //   ScrollTrigger.removeEventListener("refresh", () => scrollbar.current?.update());
  //   scrollbar.current?.destroy();
  //   scrollbar.current = null;
  // };
  }, []);

  
  //-----------GSAP TRANSITIONS

  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef(null);
  const navigate = useNavigate();

  const triggerSwipe = (path) => {
  const overlay = overlayRef.current;
  if (!overlay) {
    navigate(path);
    return;
  }

  console.log("Transition vers", path);
  setIsTransitioning(true);

  // Réinitialise l'overlay en dehors de l’écran
 // Position initiale de l'overlay (hors écran en bas)
gsap.set(overlay, { yPercent: 200 });

const tl = gsap.timeline();

// 1. Entrée de l’overlay (de bas à milieu visible)
tl.to(overlay, {
  yPercent: 0,  // ici 0 pour que l'overlay soit bien visible à la fin
  duration: 0.6,
  ease: "power2.inOut",
});

// 2. Scroll vers le haut, on retourne une Promise pour que la timeline attende la fin
tl.add(() => {
  return new Promise((resolve) => {
    if (scrollbar.current) {
      console.log("Scroll to top");
      scrollbar.current.scrollTo(0, 0, 800); // scroll fluide sur 800ms
      setTimeout(() => {
        resolve(); // fin du scroll après 800ms
      }, 800);
    } else {
      resolve();
    }
  });
});

// 3. Navigation une fois scroll + overlay terminés
tl.add(() => {
  console.log("Navigate");
  navigate(path);
});
};



  //------ TRAITS BG
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const container = containerRef.current;
      if (!container) return;

      container.querySelectorAll(".trait").forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-value")) || 0;
        const x = (window.innerWidth - event.pageX * depth) / 250;
        el.style.transform = `translate3d(${x}px, 0px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="site-wrapper siteBgColor">
      {/* Overlay plein écran */}
      <div
        ref={overlayRef}
        className="overlayTransition"
        style={{
          pointerEvents: isTransitioning ? "all" : "none",
        }}
      />

      <main className="">
        <div className="noiseBG">
          <div ref={containerRef} className="parallax-wrap linesBG">
            <svg
              className="lineAnimation svg-path"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2469.29 1270.81"
            >
              <g id="trait1" className="trait" data-value="3">
                <path
                  className="svg-path"
                  d="M0,147.65s600,0,600,321.74-344.57,370.65,84.78,800"
                />
              </g>
              <g id="trait2" className="trait" data-value="6">
                <path
                  className="svg-path"
                  d="M2468.61,538.4s-338.95,121.54-651.77,196.76C1222.42,878.09,1705.69,2,1098.51,2"
                />
              </g>
            </svg>
          </div>
        </div>

        <NavMenu
          scrollContainerRef={scrollContainerRef}
          overlayRef={overlayRef}
          triggerSwipe={triggerSwipe}
        />
        <div
          className="content-overflow topContentMargin contentPaddingLR"
          ref={scrollContainerRef}
          style={{ overflowX: "hidden" }}
        >
          <div className="content-overflow__inner content-wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <MainContent
                    overlayRef={overlayRef}
                    triggerSwipe={triggerSwipe}
                    scrollContainerRef={scrollContainerRef}
                  />
                }
              />
              <Route
                path="/listing"
                element={<Listing triggerSwipe={triggerSwipe} />}
              />
              <Route
                path="/projects/:id"
                overlayRef={overlayRef}
                element={
                  <Project
                    triggerSwipe={triggerSwipe}
                    scrollContainerRef={scrollContainerRef}
                    overlayRef={overlayRef}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
