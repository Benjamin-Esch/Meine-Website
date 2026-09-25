// Instagram-Reel erst nach Klick laden (Zwei-Klick-Lösung):
// Vorher wird keine Verbindung zu Meta/Instagram aufgebaut.
(function () {
  var button = document.querySelector('[data-load-reel]');
  if (!button) return;

  var REEL_URL = 'https://www.instagram.com/reel/DW7F03qgZXx/';

  button.addEventListener('click', function () {
    var container = document.getElementById('reel');
    container.classList.add('reel--loaded');
    container.innerHTML =
      '<blockquote class="instagram-media" data-instgrm-captioned' +
      ' data-instgrm-permalink="' + REEL_URL + '?utm_source=ig_embed&amp;utm_campaign=loading"' +
      ' data-instgrm-version="14">' +
      '<a href="' + REEL_URL + '" target="_blank" rel="noopener">Beitrag auf Instagram ansehen</a>' +
      '</blockquote>';

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
  });
})();
