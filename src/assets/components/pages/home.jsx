import medias from "../../../data/medias.js";
import listingProjects from "../../../data/listingProjects";
import aboutData from "../../../data/aboutData.js";
import ContactForm from "../contact.jsx";
import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home({ scrollContainerRef, triggerSwipe }) {
  const homeMedia = medias.find((item) => item.context === "home");
  const projects = [];
  const projectsNotFirst = [];

  //--------------- about IMG FLIP

  const aboutImgDev = medias.find((item) => item.id === 4);
  const aboutImgDesign = medias.find((item) => item.id === 3);

  const [aboutSubject, setAboutSubject] = useState(true);

  const ChangeAboutSubject = () => {
    setAboutSubject((current) => !current);
  };

  const aboutTextDev = useRef(null);
  const aboutTextDesign = useRef(null);
  const aboutButtonDesign = useRef(null);

  useEffect(() => {
    const dev = aboutTextDev.current;
    const design = aboutTextDesign.current;
    const Buttondesign = aboutButtonDesign.current;

    if (aboutSubject) {
      // Afficher texte Dev
      gsap.to(design, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          design.style.display = "none";
          Buttondesign.style.display = "none";
          dev.style.display = "block";
          gsap.fromTo(
            dev,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    } else {
      // Afficher texte Design
      gsap.to(dev, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          dev.style.display = "none";
          design.style.display = "block";
          design.style.display = "block";
          gsap.fromTo(
            design,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });

      gsap.to(Buttondesign, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          dev.style.display = "none";
          design.style.display = "block";
          Buttondesign.style.display = "block";
          gsap.fromTo(
            Buttondesign,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.2 }
          );
        },
      });
    }
  }, [aboutSubject]);

  //--------------- GSAP SCROLL PARALLAX

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    console.log("scroll contianer : " + scrollContainer);
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
          y: "-3rem",
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

  //------------------- ANIM SKILLS

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Sélectionne tous les éléments .js-row dans le conteneur scrollé
    const rows = container.querySelectorAll(".js-row");

    const anim = gsap.fromTo(
      rows,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: rows[0],
          scroller: scrollContainerRef.current, // important pour Scrollbar + ScrollTrigger
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Fix refresh avec scroll proxy (comme tu faisais)
    const rId = setTimeout(() => ScrollTrigger.refresh(), 100);

    // Cleanup
    return () => {
      clearTimeout(rId);
      anim.kill();
      anim.scrollTrigger?.kill();
    };
  }, []);

  //------------------ LISTING PROJECTS

  for (let i = 0; i < listingProjects.length; i++) {
    projects.push(listingProjects[i]);
  }

  for (let i = 1; i < 3; i++) {
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
                  <span className="homeTitle__name">Florent</span>
                  <span className="homeTitle__surname">Chatelet</span>
                </h1>
              </div>
              <div className="homeTopPageText">
                <p class="p-primColor">
                  Bonjour, je suis développeur web front et full stack en
                  devenir, avec un background en design graphique et motion
                  design. Curieux, je cherche constamment à apprendre de
                  nouvelles compétences techniques.
                </p>
                {/* <div className="homeTopPageNav">
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
                </div> */}
              </div>
            </div>
          </div>
          <div className="homeTopRelativeWrapper">
            <div className="boxContentContainer">
              <p>
                Je cherche une alternance en développement web FRONT / BACK pour
                un niveau BAC+3 en 1 an, n'hésitez pas à me contacter!
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
                    <line
                      class="arrowDownSVG"
                      x1="27.78"
                      x2="27.78"
                      y2="76.47"
                    />
                    <path
                      class="arrowDownSVG"
                      d="M0,89.77l27.16,33.49,25.46-31.8c-6.33,6.33-15.52,16.89-24.85,16.8-10.35-.11-20.87-11.58-27.78-18.49Z"
                    />
                  </svg>
                </div>
                <p className="arrowDown__text">Mes projets</p>
              </div>
            </div>
          </div>
        </div>

        <div className="homeProjectsContainer">
          {
            // MAIN PROJECT
          }
          <div className="mainProjectContainer  content-inside-padding contentSpacing homeProjectContainer">
            <div className="mainProject__inner mainProject">
              <div className="mainProject__imgContainer">
                <div className="mainProject__specifics">
                  <div className="mainProject__specificsInner">
                    {projects[0].technologies &&
                      projects[0].technologies.map((technologie, index) => (
                        <p
                          className="p-white smallUpperCase p-primColor"
                          key={index}
                        >
                          {technologie}
                        </p>
                      ))}
                  </div>
                </div>

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
                  <p className="p-primColor">
                    {projects[0].descriptionPreview}
                  </p>
                </div>
                <div className="mainProjectContent__link mg-t-16">
                  <a
                    scrollContainerRef={scrollContainerRef}
                    onClick={(e) => {
                      e.preventDefault();
                      triggerSwipe(`/projects/${projects[0].id}`);
                    }}
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
                    <div className="secondaryProject__imgContainer">
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
                      <img
                        src={project.image}
                        className="secondaryProject__img"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="secondaryProject__Content mg-t-24">
                    <h2 className="TitleH2 textBold titlePrimaryColor">
                      {project.title}
                    </h2>
                    <div className="secondaryProject__text mg-t-16">
                      <p className="p-primColor">
                        {project.descriptionPreview}
                      </p>
                    </div>
                    <div className="secondaryProject__link mg-t-16">
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
                        src={project.image3}
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
          <div className="toListing__inner ">
            <p className="toListing__largeText largeBoldText p-white">
              Et le reste ?
            </p>
            <p className="mg-t-32 p-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="buttonContainer mg-t-24">
              <Link
                to="/listing"
                onClick={(e) => {
                  e.preventDefault();
                  triggerSwipe(`/projects/${projects[0].id}`);
                }}
                className="PrimaryButtonLink"
              >
                <button className="primaryButton-light">
                  Voir tous mes projets
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-about contentSpacing">
          <div className="h-about__inner">
            <div className="h-about__textContainer">
              <h2 className="largeBoldText p-primColor"> Qui suis-je ?</h2>

              <div className="h-about__textContainerInner">
                <div
                  className="h-about__text h-about-Developper mg-t-24"
                  ref={aboutTextDev}
                >
                  <div className=" p-primColor">
                    <p className="">
                      Après plusieurs années à créer des expériences visuelles,
                      j’ai décidé de me recentrer sur ma passion pour le
                      développement web, pour allier créativité, logique et
                      interactivité.
                    </p>

                    <p className=" mg-t-24">
                      Aujourd’hui, je me forme en développement front-end
                      (React, GSAP) et en back-end (PHP, POO, MySQL) dans le
                      cadre d’un futur bachelor en alternance.
                    </p>

                    <p className=" mg-t-24">
                      Fort de mon expérience 360 en agence et en travaux en collaboration avec des développeurs, j'aspire à mettre mes connaissances acquises à votre disposition.
                    </p>
                  </div>
                </div>
                
                <div
                  className="h-about__text h-about-Designer mg-t-24"
                  ref={aboutTextDesign}
                >
                  <div className=" p-primColor">
                    <p className="">
                      je suis également motion designer et graphiste basé entre
                      Lyon et Rouen. Formé aux Gobelins, je combine une approche
                      narrative et graphique pour créer des contenus dynamiques
                      qui ont du sens, que ce soit en 2D,3D ou montage vidéo.
                    </p>

                    <p className=" mg-t-24">
                      Concevoir des animations réactives, construire des
                      systèmes procéduraux, résoudre des casse-têtes visuels,
                      c’est cette dimension technique qui nourrit ma passion.
                    </p>
                  </div>
                </div>
                 <a
                href="https://vimeo.com/1014820828"
                target="blank"
                className="mg-t-24 primaryButton"
                ref={aboutButtonDesign}
              >
                Visionner mon showreel
              </a>
              </div>
              <a
                href="/pdf/Florent_Chatelet_CV.pdf"
                download="Florent_Chatelet_CV.pdf"
                target="_blank"
                className="mg-t-24 seeProjectLink primaryButton"
              >
                Mon CV
              </a>

             
            </div>
            <div className="h-about__imgToggleContainer">
              <div className="h-about__imgContainer">
                <img
                  src={
                    aboutSubject === true
                      ? aboutImgDev.image
                      : aboutImgDesign.image
                  }
                  alt=""
                />
              </div>
              <div className="h-about__toggleContainer">
                <div
                  onClick={ChangeAboutSubject}
                  className={`h-about__toggle ${
                    aboutSubject === true ? "h-about__toggleSelected" : ""
                  } `}
                >
                  <p>Developpeur</p>
                </div>
                <div
                  onClick={ChangeAboutSubject}
                  className={`h-about__toggle ${
                    aboutSubject === false ? "h-about__toggleSelected" : ""
                  } `}
                >
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <h2 className="TitleH2 p-primColor">Compétences</h2>
          <p className="p-primColor mg-t-16">
            Dans un apprentissage continu, je cherche à entretenir mes acquis et
            reste à l'afus des dernières technologies.
          </p>
          <div className="skills__inner mg-t-32">
            {aboutData.map((aboutRow, index) => (
              <div key={index} className="skills__row js-row p-white">
                <h3 className="skills__title TitleH3 mg-b-24">
                  {aboutRow.category}
                </h3>
                {aboutRow.skills.map((skill, index) => (
                  <div key={index} className="skills__rowItem">
                    <p className="skills__rowItemText textUppercase">{skill}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* <div className="nextSkills mg-t-32">
            <h2 className="TitleH2 p-primColor">Et ensuite</h2>
            <p className="p-primColor mg-t-16">
              Voici ce que je suis en train d'apprendre actuellement
            </p>
          </div> */}
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
