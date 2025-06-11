const listingProjects = [
  {
    id: "1",
    title: "Somewhere Between",
    link: "https://sb-preprod.netlify.app/",
    image: "/assets/medias/somewhereBetweenCover.png",
    image2: "/assets/medias/somewhereBetweenCover.png",
    descriptionPreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    descriptions: [
      "Somewhere Between est un projet 3D sur navigateur, sous forme de jeu-vidéo narratif où l'on découvre plusieurs univers immersifs et animés en 3D.",
    ],
    roles: ["Lead Designer Technique", "Modélisateur 3D", "intégrateur 3D"],
    technologies: ["Javascript", "THREE.JS", "BLENDER"],
    content: [
      {
        type: "ImageText",
        props: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "/assets/medias/somewhereBetween/somewhereBetween_world1-1.PNG",
        },
      },
      {
        type: "CenteredText",
        props: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      },
      {
        type: "GallerySmall",
        props: {
          images: [
            "/assets/medias/somewhereBetween/somewhereBetween_assets-1.png",
            "/assets/medias/somewhereBetween/somewhereBetween_assets-3.png",
            "/assets/medias/somewhereBetween/somewhereBetween_assets-2.png",
          ],
        },
      },
      {
        type: "ImageText",
        props: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "/assets/medias/somewhereBetween/somewhereBetween_world1-2.PNG",
        },
      },
      {
        type: "Paragraph",
        props: {
          title: "Titre paragraphe Lol",
          text: "Paragraphe lol Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      },
      {
        type: "ImgFull",
        props: {
          image:
            "/assets/medias/somewhereBetween/somewhereBetween_world2-1.PNG",
        },
      },
    ],
  },

  {
    id: "2",
    title: "Musée d'Orsay",
    image: "/assets/medias/museeOrsayCover.png",
    image2: "/assets/medias/img_test1.jpg",
    descriptionPreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eee eee aazer",
    ],
    roles: ["Développeur Front/Back", "UX UI Designer"],
    technologies: ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
    content: [
      {
        type: "TwoImgText",
        props: {
          flexRow: false,
          title: "Contenus relationnels",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image1: "/assets/medias/orsay/orsay-searchUI.png",
          image2: "/assets/medias/orsay/orsay-searchCode.png",
        },
      },
      {
        type: "GallerySmall",
        props: {
          images: [
            "/assets/medias/orsay/orsay-UI-1.png",
            "/assets/medias/orsay/orsay-UI-2.png",
            "/assets/medias/orsay/orsay-UI-3.PNG",
          ],
        },
      },

      {
        type: "TwoImgText",
        props: {
          flexRow: false,
          title: "Contenus relationnels",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image1: "/assets/medias/orsay/orsay-relationContentUI.png",
          image2: "/assets/medias/orsay/orsay-relationContent.png",
        },
      },
      {
        type: "CenteredText",
        props: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
      },
      {
        type: "ImgFull",
        props: {
          image: "/assets/medias/orsay/designSystem.png",
          legend: "Design system du site",
        },
      },
      {
        type: "Paragraph",
        props: {
          title: "Paragraph",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
      },
    ],
  },

  {
    id: "3",
    title: "Projet 3",
    image: "/assets/medias/img_test4.png",
    image2: "/assets/medias/img_test1.jpg",
    descriptionPreview: "splendide texte",
    technologies: ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
    content: [
      {
        type: "CenteredText",
        props: { text: "Texte centré 1" },
      },
      {
        type: "CenteredText",
        props: { text: "Texte centré 2" },
      },
      {
        type: "Paragraph",
        props: { text: "Paragraphe lol" },
      },
    ],
  },

  {
    id: "4",
    title: "Projet 4",
    image: "/assets/medias/img_test4.png",
    image2: "/assets/medias/img_test1.jpg",
    descriptionPreview: "splendide texte",
    technologies: ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
    content: [
      {
        type: "CenteredText",
        props: { text: "Texte centré 1" },
      },
      {
        type: "CenteredText",
        props: { text: "Texte centré 2" },
      },
      {
        type: "Paragraph",
        props: { text: "Paragraphe lol" },
      },
    ],
  },
];

export default listingProjects;
