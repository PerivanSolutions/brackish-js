(function() {
  'use strict';
  var rotateInterval,
      autoRotate,
      rotateForward,
      rotateBackward,
      els = document.getElementsByClassName('js-rotate__content');

  rotateForward = function rotateForward(nodes) {
    nodes[0].parentNode.appendChild(nodes[0]);
  };

  rotateBackward = function rotateBackward(nodes) {
    // Place the last before the second
    nodes[0].parentNode.insertBefore(nodes[nodes.length - 1], nodes[1]);

    // Place the first before the third
    window.setTimeout(function() {
      nodes[0].parentNode.insertBefore(nodes[0], nodes[2]);
    }, 100);
  };

  autoRotate = function autoRotate() {
    window.clearInterval(rotateInterval);
    rotateInterval =
      window.setInterval(function() { rotateForward(els); }, 8000);
    return rotateInterval;
  };

  if (els.length > 1) { autoRotate(); }
}());
