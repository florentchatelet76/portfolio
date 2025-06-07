const listingProjects = [
    {
        id: "1",
        title: "Somewhere Between",
        image: "/assets/medias/somewhereBetweenCover.png",
        image2 : "/assets/medias/img_test1.jpg",
        descriptionPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        descriptions: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eee eee aazer"],
        roles : ["Intégrateur 3D", "UX UI Designer", "Motion designer"],
        technologies : ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
        content : [
          {
            type : "CenteredText",
            props : { text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          },
          {
            type : "CenteredText",
            props : { text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          },
          {
            type : "GallerySmall",
            props : { images : ["/assets/medias/img_test4.png", "/assets/medias/img_test4.png", "/assets/medias/img_test4.png" ]}
          },
          {
            type : "ImageText",
            props : { text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image : "/assets/medias/img_test4.png "}
          },
          {
            type : "Paragraph",
            props : { title : "Titre paragraphe Lol", text : "Paragraphe lol Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          },
          {
            type : "ImgFull",
            props : { image : "/assets/medias/img_test4.png"}
          }

        ],
      },

      {
        id: "2",
        title: "Musée d'Orsay",
        image: "/assets/medias/museeOrsayCover.png",
        image2 : "/assets/medias/img_test1.jpg",        
        descriptionPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        descriptions: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eee eee aazer"],
        roles : ["Développeur Front/Back Wordpress", "UX UI Designer"],
        technologies : ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
        content : [
          {
            type : "CenteredText",
            props : { text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
          },
          {
            type : "CenteredText",
            props : { text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
          },
                    {
            type : "ImgFull",
            props : { image : "/assets/medias/orsay/designSystem.png"}
          },
          {
            type : "Paragraph",
            props : {  title : "Paragraph", text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
          }

        ],
      },

      {
        id: "3",
        title: "Projet 3",
        image: "/assets/medias/img_test4.png",
        image2 : "/assets/medias/img_test1.jpg",        
        descriptionPreview: "splendide texte",
        technologies : ["Wordpress", "HTML/CSS", "Javascript", "PHP"],
        content : [
          {
            type : "CenteredText",
            props : { text : "Texte centré 1"}
          },
          {
            type : "CenteredText",
            props : { text : "Texte centré 2"}
          },
          {
            type : "Paragraph",
            props : { text : "Paragraphe lol"}
          }

        ],
      },

      {
        id: "4",
        title: "Projet 4",
        image: "/assets/medias/img_test4.png",
        image2 : "/assets/medias/img_test1.jpg",       
        descriptionPreview: "splendide texte",
        technologies : ["Wordpress", "HTML/CSS", "Javascript", "PHP"],        
        content : [
          {
            type : "CenteredText",
            props : { text : "Texte centré 1"}
          },
          {
            type : "CenteredText",
            props : { text : "Texte centré 2"}
          },
          {
            type : "Paragraph",
            props : { text : "Paragraphe lol"}
          }

        ],
      },
]


export default listingProjects