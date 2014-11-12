(function() {
  'use strict';
  var rotateInterval,
      rotate,
      rotateForward,
      rotateBackward,
      contents = document.getElementsByClassName('js-rotate__content');

  rotateForward = function rotateForward() {
    contents[0].parentNode.appendChild(contents[0]);
  };

  rotateBackward = function rotateBackward() {
    contents[0].parentNode.insertBefore(
        contents[contents.length - 1], contents[0]);
  };

  rotate = function rotate() {
    window.clearInterval(rotateInterval);
    rotateInterval = window.setInterval(rotateForward, 8000);
    return rotateInterval;
  };

  rotate();
}());
