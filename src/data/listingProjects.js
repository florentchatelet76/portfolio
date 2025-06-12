const listingProjects = [
  {
    id: "0",
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
          title: "Modélisation & optimisation",
          text: "L’expérience est jouable dans n’importe quel navigateur à partir du lien, grâce au langage de développement web WEBGL. Les assets ont étés modélisés et optimisés pour réduire les temps de chargement.",
          image:
            "/assets/medias/somewhereBetween/somewhereBetween_assets-1.png",
        },
      },
      {
        type: "Paragraph",
        props: {
          title: "Utilisation de THREE.JS",
          text: "Three.js me permet de manipuler WebGL via JavaScript pour créer des scènes 3D interactives. Je l’utilise pour intégrer des modèles, gérer les lumières, caméras et animations en temps réel.",
        },
      },
            {
        type: "TwoImgText",
        props: {
          flexRow: false,
          title: "Modelisation & prototypage",
          text: "Le personnage ainsi que le reste des décors ont étés modélisé et animé sur Blender et exporté en .gltf pour son importation en WEBGL avec THREE.JS. Les animations sont créées et nommées sur blender et sont manipulables directement dans le code, selon si le joueur marche, ramasse, tombe, etc. Des zones de collisions permettent de simuler des murs que le joueur ne peut franchir",
          image1: "/assets/medias/somewhereBetween/somewhereBetween_assets-3.png",
          image2: "/assets/medias/somewhereBetween/somewhereBetween_assets-2.png",
        },
      },

            {
        type: "GallerySmall",
        props: {
          images: [
            "/assets/medias/somewhereBetween/somewhereBetween_world2-4.png",
            "/assets/medias/somewhereBetween/somewhereBetween_world3-3.png",
            "/assets/medias/somewhereBetween/somewhereBetween_world4-1.png",
          ],
        },
      },
            {
        type: "ImageText",
        props: {
          title : "Animation de la camera 3D",
          text: "Une caméra 3D suit les déplacements du joueur et peut se déplacer pour se repositionner selon où il se trouve, ou trigger une animation smooth pour exposer le décors.",
          image:
            "/assets/medias/somewhereBetween/somewhereBetween_world2-2.PNG",
        },
      },

      {
        type: "ImgFull",
        props: {
          image:
            "/assets/medias/somewhereBetween/somewhereBetween_world2-1.PNG",
            legend : "Le joueur peut intéragir avec un élément si la distance entre les 2 est suffisamment réduite"
        },
      },
    ],
  },

  {
    id: "1",
    title: "Musée d'Orsay",
    image: "/assets/medias/orsay/museeOrsayCover-1.png",
    image2: "/assets/medias/orsay/orsay-mockup-2.jpg",
    image3: "/assets/medias/orsay/orsay-mockup-1.jpg",
    descriptionPreview:
      "Projet de refonte visuelle et technique du site du musée d'Orsay, dans le cadre d'un projet universitaire.",
    descriptions: [
      "Projet de refonte visuelle et technique du site du musée d'Orsay, dans le cadre d'un projet universitaire. L'objectif est de développer un Thème Wordpress sur mesure, pour exploiter les fonctions du CMS afin de lier et manipuler les données en back-office.",
    ],
    roles: ["Développeur Front/Back", "UX UI Designer"],
    technologies: ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
    content: [
      {
        type: "TwoImgText",
        props: {
          flexRow: false,
          title: "Recherche dynamique",
          text: "Ce code permet d’afficher dynamiquement les résultats de recherche correspondant au mot-clé saisi par l’utilisateur, uniquement pour les contenus de type personnalisé exposition. Il utilise une requête WP_Query pour filtrer les résultats et charger un template spécifique pour chaque exposition trouvée (content-exposition). Si aucun résultat n’est trouvé, un message d’information s'affiche.",
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
          text: "Ce script permet d’afficher jusqu’à 5 autres œuvres du même artiste sur la page d’une œuvre individuelle. Il utilise une requête WP_Query avec une meta_query pour récupérer les contenus personnalisés de type oeuvre liés au même artiste (via un champ personnalisé artiste-lie).L’œuvre en cours est automatiquement exclue des résultats pour éviter les doublons.",
          image1: "/assets/medias/orsay/orsay-relationContentUI.png",
          image2: "/assets/medias/orsay/orsay-relationContent.png",
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
        type: "TwoImgText",
        props: {
          flexRow: false,
          title: "Frise chronologique Dynamique",
          text: "Ce module affiche une frise chronologique interactive alimentée dynamiquement via le back-office WordPress. Chaque point de la frise correspond à une entrée (date + texte) saisie dans un champ ACF (Advanced Custom Fields). Le nombre d’éléments est illimité et la frise s’adapte automatiquement à la quantité de contenu ajoutée. Des boutons « Précédent » et « Suivant » permettent de naviguer dans la frise, optimisant ainsi l’exploration d’un parcours ou d’un récit visuel.",
          image1: "/assets/medias/orsay/orsay-friseUI.png",
          image2: "/assets/medias/orsay/orsay-friseCode.png",
        },
      },
    ],
  },

  {
    id: "2",
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
    id: "3",
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
