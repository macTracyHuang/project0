$(function(){
// Document is ready
  $("#nav-placeholder").load("nav.html");

  var audio = document.getElementsByTagName("audio")[0];
  $("#sugoi").mouseenter(function() {
    audio.play();
  });
  alert(audio.name);
});
