var EditingSlider = (function() {
  'use strict';
  var editingSlider;

  function init(duration) {
    editingSlider = $("#editing-slider").noUiSlider({
      start: [0, duration],
      connect: true,
      range: {
        'min': 0,
        'max': duration
      }
    });
    seek();

    $("#save").on('click', function() {
      saveClip();
    }) 
  }

  function saveClip() {
    hidePlayerControls();
    generateLink();
  }

  function hidePlayerControls() {
    $("#player-interactions").slideUp('400');
  }

  function generateLink() {
    var domain = document.location.origin;
    var url = YouTubeController.getUrl();
    var id = url.substr(url.length - 11);
    var startTime = editingSlider.val()[0];
    var endTime = editingSlider.val()[1];
    var directLink = domain + "/play?id=" + id + "&start=" + startTime + "&end=" + endTime;
    showLink(directLink);
  }

  function showLink(directLink) {
    debugger;
    $("#direct-link").val(directLink);
    $("#link").hide().removeClass('hide').slideDown('400');
  }

  function setToCurrentTime(currentTime) {
    editingSlider.val(currentTime);
  }

  function seek() {
    editingSlider.change(function() {
      var time = editingSlider.val()[0];
      YouTubeController.trackTo(time);
      YouTubeController.pause();
    });
  }

  return {
    init:init,
    setToCurrentTime:setToCurrentTime
  };

}());