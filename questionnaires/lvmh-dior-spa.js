// Questionnaire Spa Dior (LVMH Recherche), créé le 13/10/2026.
// Questions reprises du brouillon de réponse de Bianca à Andréa Lopes.
// Lien : index.html?q=lvmh-dior-spa
window.QUESTIONNAIRE = {
  id: "lvmh-dior-spa",
  client: "Spa Dior",
  bonjour: "Hello Andréa,",
  intro: "Pour que notre proposition sur les deux pistes soit au plus juste, on a besoin de quelques précisions. Comptez cinq minutes. Répondez à ce qui vous concerne, vous pouvez laisser le reste vide.",
  merci: "Merci, vos réponses sont bien arrivées. On revient vers vous avec une proposition courte et concrète pour les deux pistes.",
  sections: [
    {
      titre: "Le test à l'Académie",
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
          type: "texte-long",
          siReponse: { lieu_test: ["En cabine", "Les deux"] }
        },
        {
          id: "moment_relaxation",
          label: "L'espace de relaxation accueille les invités avant le soin, après ou les deux ?",
          type: "choix",
          options: ["Avant le soin", "Après le soin", "Les deux"],
          siReponse: { lieu_test: ["En espace de relaxation", "Les deux"] }
        },
        {
          id: "objectifs_relaxation",
          label: "Quels objectifs sont visés en priorité dans cet espace ?",
          type: "multi",
          options: ["Relâchement", "Perception du temps d'attente"],
          autre: true,
          siReponse: { lieu_test: ["En espace de relaxation", "Les deux"] }
        },
        {
          id: "personnes_relaxation",
          label: "Combien de personnes s'y trouvent en général en même temps ?",
          type: "texte",
          placeholder: "Ex. 4 à 6",
          siReponse: { lieu_test: ["En espace de relaxation", "Les deux"] }
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
    },
    {
      titre: "Pour finir",
      questions: [
        {
          id: "commentaire",
          label: "Autre chose à nous dire ?",
          type: "texte-long",
          placeholder: "Contraintes, interlocuteurs à inclure, calendrier…"
        },
        {
          id: "nom",
          label: "Votre prénom et nom",
          type: "texte",
          requis: true
        }
      ]
    }
  ]
};
