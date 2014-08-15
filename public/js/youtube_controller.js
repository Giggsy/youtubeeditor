var YouTubeController = (function() {
  'use strict';
  var player;

  function init(videoId) {
    revealPlayerRow();
    initPlayer(videoId);
    initPlayerControls();
  }

  function revealPlayerRow() {
    $("form").slideUp('400');
    $("#player-row").hide().removeClass('hide').slideDown('400');
  }

  function initPlayerControls() {
    var body = $("body");

    body.on('click', '#play', function() {
      play();
    });

    body.on('click', '#pause', function() {
      pause();
    });
  }


  function initPlayer(videoId) {
    player = new YT.Player('player', {
      height: '400',
      width: '100%',
      videoId: videoId,
      playerVars: {
        controls: 0
      },
      events: {
        'onReady': onPlayerReady,
      }
    });

  }

  function onPlayerReady() {
    PlayingSlider.init(player.getDuration());
    EditingSlider.init(player.getDuration());
    setInterval( setCurrentTime , 1000);
  }

  function setCurrentTime() {
    var currentTime = player.getCurrentTime();
    PlayingSlider.setToCurrentTime(currentTime);
  }

  function trackTo(time) {
    player.seekTo(time);
  }

  function play() {
    player.playVideo();
  }

  function pause() {
    player.pauseVideo();
  }

  function getUrl() {
    return player.getVideoUrl();
  }

  return {
    init:init,
    player:player,
    trackTo:trackTo,
    pause:pause,
    getUrl:getUrl
  };

}());