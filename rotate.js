(function() {
  'use strict';
  var rotateInterval,
      autoRotate,
      rotateForward,
      rotateBackward,
      els = document.getElementsByClassName('js-rotate__content');

  rotateForward = function rotateForward() {
    els[0].parentNode.appendChild(els[0]);
  };

  rotateBackward = function rotateBackward() {
    // Place the last before the second
    els[0].parentNode.insertBefore(els[els.length - 1], els[1]);

    // Place the first before the third
    window.setTimeout(function() {
      els[0].parentNode.insertBefore(els[0], els[2]);
    }, 100);
  };

  autoRotate = function autoRotate() {
    window.clearInterval(rotateInterval);
    rotateInterval =
      window.setInterval(function() { rotateForward(); }, 8000);
    return rotateInterval;
  };

  if (els.length > 1) { autoRotate(); }
}());
