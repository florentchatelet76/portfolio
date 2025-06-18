const listingProjects = [
  {
    id: "0",
    title: "Somewhere Between",
    year :"2024",
    link: "https://sb-preprod.netlify.app/",
    image: "/assets/medias/somewhereBetween/somewhereBetweenCover.png",
    image2: "/assets/medias/somewhereBetween/somewhereBetweenCover.png",
    descriptionPreview:
      "Jeu 3D immersif et narratif sur navigateur, dans le cadre de la sensibilisation au sujet de la solitude chez les étudiants.",
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
    year :"2021",
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
    link: "https://github.com/florentchatelet76/register_login",
    title: "Register & Login",
    year :"2024",
    image: "/assets/medias/loginRegister/login_UI-1.png",
    image2: "/assets/medias/loginRegister/login_mockup.jpg",
    descriptionPreview: "Développement d'un système d’authentification sécurisé en PHP structuré selon une architecture MVC légère.",
    descriptions : ["Développement d'un système d’authentification sécurisé en PHP structuré selon une architecture MVC légère. Le projet comprend une gestion complète de l’inscription et de la connexion des utilisateurs, avec vérification des champs, validation des erreurs et sécurisation des sessions."],
    technologies: ["HTML/CSS", "PHP", "MYSQL"],
    roles: ["Développeur Back"],
    content: [
      {
        type : "ImageText",
        props : {
          image : "/assets/medias/loginRegister/login_hspwd.png",
          title : "Sécurisation des données",
          text : "Tous les mots de passe sont hashés avec password_hash() avant d’être stockés, et vérifiés à la connexion avec password_verify(). Les entrées utilisateurs sont protégées via des requêtes préparées PDO pour éviter les injections SQL, et les données sensibles sont échappées avec htmlspecialchars() lors de l'affichage. J’ai également mis en place session_regenerate_id() pour empêcher les attaques par fixation de session."
        }
      },
            {
        type: "List",
        
        props: { 
          title: "Architecture Modulaire & Réutilisable",
          text : "Chaque partie du code est séparée de façon claire :",
           text2: "Cela permet une maintenance facilitée et une réutilisation efficace des fonctions dans plusieurs contextes.",
          list: [
            "Modèles pour les interactions avec la base de données,", 
            "Contrôleurs pour la logique métier et les validations,",
            "Contrôleurs pour la logique métier et les validations,"] },
      },
      {
        type: "TwoImgText",
        props: { 
          image1 : "/assets/medias/loginRegister/login_signupErrors.png",
          image2: "/assets/medias/loginRegister/login_signupErrorsData.png",
          title : "UX : Gestion des erreurs ",
          text: "Les erreurs sont stockées temporairement en session pour être réaffichées après redirection. Les champs de formulaire sont pré-remplis avec les données précédemment saisies si une erreur est détectée, améliorant ainsi l’expérience utilisateur et la fluidité du parcours." },
         
        },


    ],
  },

    {
    id: "3",
    link: "https://github.com/florentchatelet76/portfolio",
    title: "Portfolio 2025",
    year :"2025",
    image: "/assets/medias/portfolio/portfolio_cover.jpg",
    image2: "/assets/medias/portfolio/portfolio_cover.jpg",
    descriptionPreview: "Développement de mon portfolio avec React.",
    descriptions : ["Développement de mon portfolio avec React. Projet d'entraînement au framework front avec l'utilisation de composants et blocs réutilisables."],
    technologies: ["HTML/CSS", "REACT", "Javascript", "GSAP"],
    roles: ["Designer", "Développeur Front"],
    content: [
            {
        type: "TwoImgText",
        props: { 
          image2 : "/assets/medias/portfolio/portfolio_code_projectMappingLoop.png",
          image1: "/assets/medias/portfolio/portfolio_code_projectMappingTable.png",
          title : "Création de blocs flexibles",
          text: "Pour ce projet, j’ai conçu une architecture flexible où le contenu est défini sous forme de blocs de données dans un fichier JavaScript. Chaque bloc possède un type associé à un composant React spécifique, ce qui permet de générer dynamiquement la mise en page en fonction des données fournies. Cette approche modulaire facilite la réutilisation des composants, simplifie la maintenance et permet d’adapter facilement le contenu sans modifier le code des composants." },
         
        },
      {
        type : "ImageText",
        props : {
          image : "/assets/medias/portfolio/portfolio_code_injectionDynamique.png",
          title : "Injection dynamique depuis un fichier de données",
          text : "Les projets sont centralisés dans un fichier JS et injectés dans la home via une simple importation. Le projet principal est affiché séparément, tandis que les suivants sont mappés en utilisant un layout inversé conditionné par (project.id % 2). Les visuels et métadonnées sont entièrement pilotés par les données, ce qui rend la structure évolutive, sans duplication de code."
        }
      },
            {
        type: "List",
        
        props: { 
          title: "Transitions de page animées avec GSAP timeline et promesse async",
          text : "Une transition custom entre les pages est orchestrée via une timeline GSAP. Elle enchaîne :",
           text2: "Cela crée un effet de swipe immersif tout en assurant que les animations et le contenu restent synchronisés.",
          list: [
            "L’entrée d’un overlay animé (yPercent: 0),", 
            "Un scrollTo top avec délai synchrone (via Promise + setTimeout),",
            "Et enfin la navigation via navigate()."] },
      },



    ],
  },

];

export default listingProjects;
