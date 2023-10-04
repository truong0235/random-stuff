function () {
  var audioElements = [];
  var audioPlaying = false;

  function playAudio(audioUrl) {
    var audio = new Audio(audioUrl);
    audio.loop = true;
    audio.play();
    audioElements.push(audio);
    return audio;
  }
  var audio1 = playAudio('https://drive.google.com/u/0/uc?id=1RfOA-LF8TUz0d-LbQSWiO-niH8PyOe1Z&export=download');

  function checkForCode() {
    var targetElement = document.querySelector('.font-header4');
    if (targetElement) {
      if (!audioPlaying) {
        audio2 = playAudio('https://drive.google.com/u/0/uc?id=1wI1nWz99npKZzkVmp-ZSdH4nS8j_3G7t&export=download');
        audioplaying = true;
      }
    }
  }
  setInterval(checkForCode, 10000);
  checkForCode();
}
