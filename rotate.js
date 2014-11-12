(function() {
  'use strict';
  var texts = document.getElementsByClassName('js-rotate__content');
  window.setInterval(function() {
    texts[0].parentNode.insertBefore(
        texts[0], texts[texts.length - 1].nextSibling);
  }, 8000);
}());
