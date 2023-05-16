$(document).ready(function () {
  var videoPath = "assets/background-video.mp4" // Substitua com o caminho correto para o seu vídeo

  var videoElement =
    '<video autoplay loop muted id="background-video">' +
    '<source src="' +
    videoPath +
    '" type="video/mp4">' +
    "Seu navegador não suporta vídeos HTML5." +
    "</video>"

  $("#video-container").html(videoElement)
})
