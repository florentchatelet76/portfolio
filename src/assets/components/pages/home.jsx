import medias from "../../../data/medias.js";
import listingProjects from "../../../data/listingProjects";
import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home({ scrollContainerRef }) {
  const homeMedia = medias.find((item) => item.context === "home");

  const projects = [];
  const projectsNotFirst = [];

  //--------------- GSAP SCROLL PARALLAX


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    console.log(scrollContainer);
    if (!scrollContainerRef?.current) return;

    gsap.utils.toArray(".sideImgs__scroll-1").forEach((img) => {
      gsap.fromTo(
        img,
        { y: "5rem" },
        {
          y: "-15rem",
          ease: "linear",
          scrollTrigger: {
            trigger: img,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            scroller: scrollContainer,
          },
        }
      );
    });

    gsap.utils.toArray(".sideImgs__scroll-2").forEach((img) => {
      gsap.fromTo(
        img,
        { y: "10rem" },
        {
          y: "0rem",
          ease: "linear",
          scrollTrigger: {
            trigger: img,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            scroller: scrollContainer,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainerRef]);

  for (let i = 0; i < listingProjects.length; i++) {
    projects.push(listingProjects[i]);
  }

  for (let i = 1; i < listingProjects.length; i++) {
    projectsNotFirst.push(listingProjects[i]);
  }

  return (
    <div className="home homeContainer">
      <div className="home__inner">
        {/* <div className="myName">
          {prenom.split("").map((lettre, index) => (
            <span key={index} className="lettre">
              {lettre}
            </span>
          ))}
        </div> */}

        <div className="homeTopPageContent">
          <div className="homeTopPageContent__inner">
            <div className="homeTopPageContent__logo topPageLogo">
              <div className="topPageLogo__inner">
                <svg
                  id="Calque_1"
                  data-name="Calque 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 143.27 371.25"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    className="cls-3"
                    d="M1.06,233.89c3.73-29.49,11.24-35.63,18.24-22.79-10.2-18.7-13.09-29.68-13.94-32.57C-.81,213.6.22,234.93.22,234.93"
                  />
                  <path
                    className="cls-2"
                    d="M.46,230.72v-89.06C.46,64.2,65.1.46,142.81.46v89.06C65.1,89.52.46,153.26.46,230.72Z"
                  />
                  <path
                    className="cls-1"
                    d="M.46,230.72c0,76.98,65.12,140.07,142.35,140.07v-89.91C65.58,280.88.46,217.8.46,140.81"
                  />
                </svg>
              </div>
            </div>
            <div className="homeTopPageContent__sideText">
              <div className="homeTopPageContent__title">
                <h1 className="homeTitle textUppercase">
                  <span class="homeTitle__name">Florent</span>
                  <span class="homeTitle__surname">Chatelet</span>
                </h1>
              </div>
              <div className="homeTopPageText">
                <p class="p-primColor">
                  Bonjour, je suis Florent Chatelet, développeur web front et
                  full stack en devenir, avec un background en design graphique
                  et motion design.
                </p>
                <div className="homeTopPageNav">
                  <div className="buttonContainer">
                    <Link to="/listing" className="PrimaryButtonLink">
                      <button className="primaryButton">Qui suis-je</button>
                    </Link>
                  </div>
                  <div className="buttonContainer">
                    <Link to="/listing" className="PrimaryButtonLink">
                      <button className="primaryButton">Contactez-moi</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="boxContentContainer">
          <p>
            Je cherche une alternance pour un niveau BAC+3 en 1 an, alors si mon
            profil vous intéresse, n’hésitez surtout pas !
          </p>
        </div>
        <div className="circlesContainer">
          <div className="orbitWrapper">
            <div className="circlesContainer__leftCircle"></div>
            <div className="circlesContainer__rightCircle"></div>
          </div>
        </div>
        <div className="arrowDown">
          <div className="arrowDown__inner">
            <p className="arrowDown__text">Mes projets</p>
            <div className="arrowDownSVGContainer">
              <svg
                id="FLECHE"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52.62 123.26"
              >
                <line class="arrowDownSVG" x1="27.78" x2="27.78" y2="76.47" />
                <path
                  class="arrowDownSVG"
                  d="M0,89.77l27.16,33.49,25.46-31.8c-6.33,6.33-15.52,16.89-24.85,16.8-10.35-.11-20.87-11.58-27.78-18.49Z"
                />
              </svg>
            </div>
            <p className="arrowDown__text">Mes projets</p>
          </div>
        </div>
        <div className="homeProjectsContainer">
          {
            // MAIN PROJECT
          }
          <div className="mainProjectContainer  content-inside-padding contentSpacing homeProjectContainer">
            <div className="mainProject__inner mainProject">
              <div className="mainProject__imgContainer">
                <img
                  src={projects[0].image}
                  className="mainProject__img"
                  alt=""
                />
              </div>
              <div className="mainProjectContent">
                <div className="mainProjectContent__title">
                  <h2 className="TitleH2 textBold titlePrimaryColor">
                    {projects[0].title}
                  </h2>
                </div>
                <div className="mainProjectContent__description mg-t-24">
                  <p className='p-primColor'>{projects[0].descriptionPreview}</p>
                </div>
                <div className="mainProjectContent__link mg-t-16">
                  <a
                    className="seeProjectLink primaryButton"
                    href={`/projects/${projects[0].id}`}
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          </div>
          {
            // SECONDARY PROJECTS
          }
          {projectsNotFirst.map((project) => (
            <div key={project.id} className="secondaryProject contentSpacing">
              <div
                className={`secondaryProject__inner ${
                  project.id % 2 == 0
                    ? "secondaryProject__flex"
                    : "secondaryProject__flex-reverse"
                } `}
              >
                <div className="secondaryProject__imgTextContainer content-inside-padding-medium">
                  <div className="secondaryProject__imgSpecifics">
                    <div className="secondaryProject__specifics">
                      <div className="secondaryProject__specificsInner">
                        {project.technologies &&
                          project.technologies.map((technologie, index) => (
                            <p
                              className="roles__roleText smallUpperCase p-primColor"
                              key={index}
                            >
                              {technologie}
                            </p>
                          ))}
                      </div>
                    </div>
                    <div className="secondaryProject__imgContainer">
                      <img
                        src={homeMedia.image}
                        className="secondaryProject__img"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="secondaryProject__Content mg-t-24">
                    <h2 className="TitleH2 textBold titlePrimaryColor">
                      {project.title}
                    </h2>
                    <div className="secondaryProject__text">
                      <p className='p-primColor'>{project.descriptionPreview}</p>
                    </div>
                    <div className="secondaryProject__link mg-t-16">
                      <a
                        className="seeProjectLink primaryButton"
                        href={`/projects/${project.id}`}
                      >
                        Voir le projet
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sideImgs">
                  <div className="sideImgs__inner">
                    <div
                      className={`sideImgs__sideImg sideImgs__scroll-1 ${
                        project.id % 2 == 0
                          ? "sideImgs__sideImg1-reverse"
                          : "sideImgs__sideImg1"
                      } `}
                    >
                      <img
                        src={project.image2}
                        className="sideImgs__img"
                        alt=""
                      />
                    </div>

                    <div
                      className={`sideImgs__sideImg sideImgs__scroll-2 ${
                        project.id % 2 == 0
                          ? "sideImgs__sideImg2-reverse"
                          : "sideImgs__sideImg2"
                      } `}
                    >
                      <img
                        src={project.image2}
                        className="sideImgs__img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="toListing">
          <div className="toListing__inner">
            <p className="toListing_LargeText"></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
