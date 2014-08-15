var PlayingSlider = (function() {
  'use strict';
  var playingSlider;

  function init(duration) {
    playingSlider = $("#playing-slider").noUiSlider({
      start: 0,
      connect: "upper",
      range: {
        'min': 0,
        'max': duration
      }
    });
    seek();
  }

  function setToCurrentTime(currentTime) {
    playingSlider.val(currentTime);
  }

  function seek() {
    playingSlider.change(function() {
      var time = playingSlider.val();
      YouTubeController.trackTo(time);
    });
  }

  return {
    init:init,
    setToCurrentTime:setToCurrentTime
  };

}());