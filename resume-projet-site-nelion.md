# Résumé du projet — Nouveau site web Nelion

## Contexte
Refonte complète du site nelion.fr : landing page repositionnée sur l'accompagnement à la transition IA pour TPE/PME (formations certifiantes CPF/OPCO, agents IA sur-mesure, accompagnement récurrent), inspirée du design de business.udemy.com/fr. Thème anthracite + accents néon jaune/orange, police JetBrains Mono en accent sur les éléments "data" (chiffres, tags, labels), sans-serif pour le reste.

## Fichiers du projet (dans le dossier de sortie Cowork)
- **index.html** — landing page principale (hero, offre en 3 piliers, stats, parcours, audit gratuit, témoignages, à propos, FAQ, CTA RDV découverte, section contact direct, footer).
- **devis.html** — formulaire de demande de devis intégré au site (coordonnées + type de besoin + description projet + budget), soumis en arrière-plan vers un Google Form.
- **audit-ia.html** — quiz d'audit IA en 10 questions avec score /10, formulaire de contact gate avant révélation du score, soumis vers un autre Google Form.

## Intégrations Google (dans Drive, dossier "Nouveau site web")
- **Google Form "Audit IA - Nelion"** + Sheet lié "Audit IA - Nelion (réponses)" — connecté à audit-ia.html.
- **Google Form "Demande de devis - Nelion"** + Sheet lié "Demande de devis - Nelion (réponses)" — connecté à devis.html.
- Les deux formulaires sont publiés (accessibles à tous ceux qui ont le lien) et testés bout en bout (soumission + vérification des lignes dans les Sheets).

## Liens clés utilisés sur le site
- RDV découverte (Google Calendar) : https://calendar.app.google/tMXi9i3qAubQbQXa7
- Contact direct : mailto:maxime@nelion.fr et WhatsApp https://wa.me/33638397886

## Décisions de contenu notables
- Aucune mention des organismes de formation partenaires ni de la certification Qualiopi (argument gardé en réserve si besoin) ; le financement CPF/OPCO reste mis en avant.
- Positionnement "entrepreneurs" plutôt que "dirigeants" pour les témoignages.
- 3 vrais avis clients intégrés (avis Google, sans noms car non fournis — attribution générique "Avis vérifié" puis retirée à la demande de Max).
- Stats en bas de hero : +100 professionnels formés / 100% sur-mesure / CPF-OPCO financement / France entière.
- Piliers de l'offre : (01) Formations certifiantes — CTA "Demande de RDV découverte" vers Calendly ; (02) Agents IA sur-mesure — tag "100% personnalisé" + CTA "Demander un devis" vers devis.html ; (03) Accompagnement à la transition — tag "Suivi dans la durée" + CTA "Demander un devis".

## État actuel
Tout est fonctionnel et testé. Aucune tâche en attente au moment de la rédaction de ce résumé.
