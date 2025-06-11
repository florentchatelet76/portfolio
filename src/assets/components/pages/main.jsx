import Home from "./home";
import NavMenu from "../Nav/navMenu"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function MainContent({ scrollContainerRef, triggerSwipe }) {
  return (
      <div className="site-wrapper">
        <main className="content-wrapper">
        <Home scrollContainerRef={scrollContainerRef}
        triggerSwipe={triggerSwipe}
        />
        </main>
      </div>
  );
}

export default MainContent;
