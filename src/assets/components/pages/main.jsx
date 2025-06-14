import Home from "./home";
import NavMenu from "../Nav/navMenu"
import Footer from "../footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function MainContent({ scrollContainerRef, triggerSwipe, overlayRef }) {

  
  return (
      <div className="site-wrapper">
        <main className="content-wrapper">
        <Home scrollContainerRef={scrollContainerRef}
        triggerSwipe={triggerSwipe}
        overlayRef={overlayRef}
        />
        </main>
        
      </div>
  );
}

export default MainContent;
