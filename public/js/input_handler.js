var InputHandler = (function() {
  'use strict';

  function submitHandler() {
    var form = $("form");

    form.submit(function(event) {
      var url = $("#url-input").val();
      event.preventDefault();
      extractVideoId(url);
    });
  }

  function extractVideoId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11) {
      var youTubeId = match[7];
      YouTubeController.init(youTubeId);
    } else {
      alert("Please enter a valid YouTube url.");
    }
  }

  return {
    submitHandler:submitHandler
  };

}());
