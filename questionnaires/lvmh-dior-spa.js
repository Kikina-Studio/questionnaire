// Questionnaire Spa Dior (LVMH Recherche), créé le 13/10/2026.
// Questions reprises du brouillon de réponse de Bianca à Andréa Lopes.
// Lien : index.html?q=lvmh-dior-spa
window.QUESTIONNAIRE = {
  id: "lvmh-dior-spa",
  client: "Spa Dior",
  // Le contexte est dans le mail : la page ne montre que les questions.
  titre: "Spa Dior",
  accroche: "Le son est l'architecture invisible d'un soin. Kikina le compose avec des chercheurs en neurosciences pour qu'il s'adapte à l'espace et au corps, en cabine comme en chambre.",
  logoClient: "logos/dior.svg",
  duree: "2 minutes",
  // Photos : brochure officielle Dior Spa Plaza Athénée (images/dior/, réservées à ce questionnaire Dior)
  // + chambre de nuit Unsplash pour le sommeil (images/spa/).
  images: {
    accueil: "images/dior/accueil-plaza.jpg",
    fin: "images/dior/salon-relaxation.jpg"
  },
  merci: "Merci, vos réponses sont bien arrivées.",
  sections: [
    {
      titre: "Le test à l'Académie",
      image: "images/dior/soin-visage.jpg",
      questions: [
        {
          id: "lieu_test",
          label: "Vous préférez tester en cabine, en espace de relaxation ou les deux ?",
          type: "choix",
          options: ["En cabine", "En espace de relaxation", "Les deux"]
        },
        {
          id: "soin_cabine",
          label: "En cabine, avez-vous un soin en tête sur lequel on pourrait tester ?",
          placeholder: "Le nom du soin, ou quelques mots",
          type: "texte-long"
        },
        {
          id: "espace_relaxation",
          label: "Et l'espace de relaxation ?",
          type: "groupe",
          champs: [
            { id: "moment", court: "Moment", label: "Il accueille les invités", type: "choix", options: ["Avant le soin", "Après le soin", "Les deux"] },
            { id: "objectifs", court: "Objectifs", label: "Quels objectifs y sont visés en priorité (relâchement, perception du temps d'attente…) ?", type: "texte", placeholder: "Quelques mots suffisent" },
            { id: "personnes", court: "Personnes en même temps", label: "Combien de personnes s'y trouvent en général en même temps ?", type: "choix", options: ["1 à 2", "3 à 5", "6 à 10", "Plus de 10"] }
          ]
        },
        {
          id: "dates_test",
          label: "Un test en novembre ou décembre nous convient très bien. Quelles dates vous arrangent ?",
          type: "texte",
          icone: "calendrier",
          placeholder: "Ex. semaine du 16 novembre"
        }
      ]
    },
    {
      titre: "L'expérience sommeil",
      nuit: true,
      image: "images/spa/sommeil-nuit.jpg",
      questions: [
        {
          id: "service_chambre",
          label: "Comment imaginez-vous ce service en chambre ? Par exemple autour du Slowing Down à Pitrizza, évoqué par Aude.",
          type: "texte-long",
          placeholder: "Le moment, le format, ce que vous aimeriez que l'invité ressente…"
        },
        {
          id: "equipement_sommeil",
          label: "Comment souhaitez-vous que l'expérience sonore soit vécue en chambre ?",
          type: "choix",
          options: [
            { texte: "Sur un équipement individuel fourni par l'hôtel (casque, masque, iPad ou TV)", detail: "On peut vous accompagner sur le choix, l'achat ou la location, et la mise en place." },
            "Sur le téléphone et les écouteurs de l'invité, via une app",
            "Diffusée dans la chambre par des enceintes",
            "Les trois, à discuter"
          ]
        }
      ]
    }
  ]
};
