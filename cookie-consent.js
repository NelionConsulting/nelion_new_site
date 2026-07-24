/*
 * Nelion — Bandeau d'information sur les services tiers.
 * A inclure sur chaque page via : <script src="cookie-consent.js" defer></script>
 *
 * Depuis le passage en self-hosting de la police (JetBrains Mono servie localement,
 * voir fonts/), ce site ne charge plus aucune ressource tierce passive au chargement de la page :
 *  - Plausible Analytics ne dépose aucun cookie et ne collecte aucune donnée personnelle
 *    (pas de consentement requis), chargé directement dans le <head> de chaque page.
 *  - Google Forms n'est appelé que lorsque l'utilisateur soumet lui-même un formulaire
 *    (audit-ia.html, devis.html) — ce n'est pas un chargement passif de contenu tiers.
 *  - Google Calendar n'est qu'un lien de sortie, rien n'est chargé tant qu'il n'est pas cliqué.
 *
 * Ce bandeau n'est donc plus bloquant : il informe une seule fois, à titre de transparence,
 * et se ferme définitivement une fois vu (mémorisé en localStorage).
 */
(function () {
  var STORAGE_KEY = "nelion_info_banner_seen";

  function hideBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.remove();
  }

  function buildBanner() {
    var wrap = document.createElement("div");
    wrap.id = "cookie-banner";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-label", "Information sur les services tiers");
    wrap.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p>Ce site utilise Google Forms (uniquement lorsque vous soumettez un formulaire) et Plausible Analytics, ' +
        'une mesure d’audience sans cookie et sans donnée personnelle. ' +
        'En savoir plus dans notre <a href="confidentialite.html">politique de confidentialité</a>.</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="btn btn-primary" id="cookie-accept">J’ai compris</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);

    document.getElementById("cookie-accept").addEventListener("click", function () {
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch (e) { /* noop */ }
      hideBanner();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var seen = null;
    try { seen = localStorage.getItem(STORAGE_KEY); } catch (e) { /* noop */ }
    if (!seen) buildBanner();
  });
})();
