// Questionnaire Spa Dior (LVMH Recherche), créé le 13/10/2026.
// Questions reprises du brouillon de réponse de Bianca à Andréa Lopes.
// Lien : index.html?q=lvmh-dior-spa
window.QUESTIONNAIRE = {
  id: "lvmh-dior-spa",
  client: "Spa Dior",
  // Le contexte est dans le mail : la page ne montre que les questions.
  titre: "Spa Dior",
  logoClient: "logos/dior.svg",
  duree: "2 minutes",
  // Photos Unsplash (licence libre), stockées dans images/spa/.
  images: {
    accueil: "images/spa/accueil-piscine.jpg",
    fin: "images/spa/fin-lin.jpg"
  },
  merci: "Merci, vos réponses sont bien arrivées.",
  sections: [
    {
      titre: "Le test à l'Académie",
      image: "images/spa/soin-cabine.jpg",
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
          points: [
            "Il accueille les invités avant le soin, après ou les deux ?",
            "Quels objectifs y sont visés en priorité (relâchement, perception du temps d'attente…) ?",
            "Combien de personnes s'y trouvent en général en même temps ?"
          ],
          type: "texte-long",
          placeholder: "Quelques mots suffisent"
        },
        {
          id: "dates_test",
          label: "Un test en novembre ou décembre nous convient très bien. Quelles dates vous arrangent ?",
          type: "texte",
          placeholder: "Ex. semaine du 16 novembre"
        }
      ]
    },
    {
      titre: "L'expérience sommeil",
      image: "images/spa/sommeil-lit.jpg",
      questions: [
        {
          id: "service_chambre",
          label: "Pourriez-vous nous en dire un peu plus sur ce que vous entendez par service en chambre, comme le Slowing Down à Pitrizza dont parle Aude ?",
          type: "texte-long"
        },
        {
          id: "equipement_sommeil",
          label: "L'expérience se ferait plutôt avec un équipement fourni par l'hôtel, ou sur le téléphone et les écouteurs de l'invité ?",
          type: "choix",
          options: [
            "Équipement fourni par l'hôtel (casque, masque, iPad ou TV)",
            "Téléphone et écouteurs de l'invité",
            "Les deux, à discuter"
          ]
        }
      ]
    }
  ]
};
