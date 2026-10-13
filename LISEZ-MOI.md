# Questionnaire client Kikina (modèle réutilisable)

Créé le 13/10/2026 pour Andréa Lopes (LVMH Recherche / Spa Dior). Sert pour tout client à qui on doit poser des questions avant une proposition.

## Comment ça marche
- `index.html` : la page, aux couleurs de la charte de juin (dégradés bleus, grain, monospace, crochets, Whyte Inktrap pour les titres).
- `questionnaires/<id>.js` : un fichier par client (salutation, intro, sections, questions).
- `config.js` : adresse qui reçoit les réponses et service d'envoi.
- Lien à envoyer au client : `<adresse du site>/?q=<id>` (ex. `?q=lvmh-dior-spa`).

## Créer un questionnaire pour un nouveau client
1. Dupliquer `questionnaires/lvmh-dior-spa.js`, le renommer (ex. `masada-ken-club.js`) et changer `id` pour le même nom.
2. Remplacer `client`, `bonjour`, `intro`, `merci` et les questions.
3. Types de questions : `texte`, `texte-long`, `choix` (une réponse), `multi` (plusieurs, `autre: true` ajoute un champ libre).
4. `siReponse` affiche une question seulement selon une réponse précédente. `requis: true` rend une question obligatoire.
5. Mettre en ligne et envoyer le lien.

Plus simple : demander à Claude « crée un questionnaire pour [client] avec ces questions ».

## Réception des réponses
- Si `envoiAutomatique` est rempli dans `config.js`, les réponses arrivent par mail sans action du client.
- Sinon (ou si l'envoi échoue), le client voit un bouton qui ouvre un mail déjà rempli vers Bianca, plus un bouton « Copier mes réponses ».
- Le client peut fermer la page et revenir : ses réponses restent sur son appareil tant qu'elles ne sont pas envoyées.

## Tester en local
Dans Claude Code : lancer la prévisualisation « questionnaire » (`.claude/launch.json`), puis ouvrir `http://localhost:8765/?q=lvmh-dior-spa`.
