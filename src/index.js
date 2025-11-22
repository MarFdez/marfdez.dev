

var audio = new Audio('/img/kirb.mp3')

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

var playButton = document.getElementById('wip');

playButton.addEventListener('click', function() {
  toggleAudio();
});