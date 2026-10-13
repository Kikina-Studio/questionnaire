# Questionnaire client Kikina (modèle réutilisable)

Créé le 13/10/2026 pour Andréa Lopes (LVMH Recherche / Spa Dior). Sert pour tout client à qui on doit poser des questions avant une proposition.

## Comment ça marche
- `index.html` : la page. Parcours une question à la fois (validé par Bianca le 13/10/2026) : accueil avec les deux logos (Kikina × client), nombre de questions et durée, plan en 3 étapes ; puis une question par écran avec barre de progression, choix en tuiles (touches A, B, C), passage automatique après un choix ; récapitulatif modifiable avant l'envoi. Style sobre luxe/premium : fond ivoire, noir, Whyte Inktrap, filets fins. Le contexte reste dans le mail, pas d'intro sur la page.
- `images/` : photos d'ambiance (Unsplash, licence libre, usage commercial autorisé). `images/spa/` = univers spa et wellness (piscine intérieure, soin en cabine, lit en lin, texture de lin), réutilisables pour tout client spa/hôtel. Sur ordinateur la photo occupe la gauche de l'écran et change à chaque étape ; sur mobile, bandeau en haut.
- `logos/` : `kikina.svg` (logo officiel, noir) + un logo par client (`dior.svg` venant de Wikimedia Commons).
- `fonts/` : copies de Whyte Inktrap dont les métriques verticales ont été corrigées (les fichiers d'origine coupaient le haut du texte dans les champs). Ne pas les remplacer par les fichiers d'origine.
- `questionnaires/<id>.js` : un fichier par client (salutation, intro, sections, questions).
- `config.js` : adresse qui reçoit les réponses et service d'envoi.
- Lien à envoyer au client : `<adresse du site>/?q=<id>` (ex. `?q=lvmh-dior-spa`).

## Créer un questionnaire pour un nouveau client
1. Dupliquer `questionnaires/lvmh-dior-spa.js`, le renommer (ex. `masada-ken-club.js`) et changer `id` pour le même nom.
2. Remplacer `client`, `titre`, `logoClient`, `images` (accueil, fin) et `image` de chaque section, (ajouter le logo du client dans `logos/`, en SVG si possible), `duree`, `merci` et les questions. `intro` existe en option mais par défaut on n'en met pas.
3. Types de questions : `texte`, `texte-long`, `choix` (une réponse), `multi` (plusieurs, `autre: true` ajoute un champ libre).
4. `points` ajoute une liste de sous-questions (a, b, c) au-dessus d'un seul champ, pour regrouper plusieurs questions en un écran. `siReponse` affiche une question seulement selon une réponse précédente (à éviter : Bianca préfère tout afficher avec « Passer », pour ne pas perdre d'information si le client se trompe). `requis: true` rend une question obligatoire.
5. Créer la page de partage : dupliquer `spa-dior/index.html` dans un dossier au nom court du client (ex. `ken-club/`), changer le titre, la description, l'image (`og:image`, 1200x630) et l'id dans les deux redirections. C'est ce qui s'affiche quand on partage le lien (WhatsApp, Gmail, LinkedIn).
6. Mettre en ligne et envoyer le lien court : `https://kikina-studio.github.io/questionnaire/<dossier>/`.

Plus simple : demander à Claude « crée un questionnaire pour [client] avec ces questions ».

## Réception des réponses
- Si `envoiAutomatique` est rempli dans `config.js`, les réponses arrivent par mail sans action du client.
- Sinon (ou si l'envoi échoue), le client voit un bouton qui ouvre un mail déjà rempli vers Bianca, plus un bouton « Copier mes réponses ».
- À chaque ouverture, le client arrive sur l'accueil. S'il avait commencé : « Reprendre » (première question sans réponse, réponses conservées) ou « Recommencer ». S'il a déjà envoyé : « Vos réponses ont bien été envoyées. Merci. » + « Répondre à nouveau ». Les réponses restent sur son appareil tant qu'elles ne sont pas envoyées.

## Tester en local
Dans Claude Code : lancer la prévisualisation « questionnaire » (`.claude/launch.json`), puis ouvrir `http://localhost:8765/?q=lvmh-dior-spa`.
