(function() {
  'use strict';
  var rotateInterval,
      autoRotate,
      rotateForward,
      rotateBackward,
      contents = document.getElementsByClassName('js-rotate__content');

  rotateForward = function rotateForward(nodes) {
    nodes[0].parentNode.appendChild(nodes[0]);
  };

  rotateBackward = function rotateBackward(nodes) {
    nodes[0].parentNode.insertBefore(nodes[nodes.length - 1], nodes[0]);
  };

  autoRotate = function rotate() {
    window.clearInterval(rotateInterval);
    rotateInterval =
      window.setInterval(function() { rotateForward(contents); }, 8000);
    return rotateInterval;
  };

  autoRotate();
}());
