(function() {
  var audioElements = [];
  var isPlaying = false;
  var audio2, audio1, confirmation, headerElement;
  function createAudio(src) {
    var audio = new Audio(src);
    audio.loop = true;
    audio.play();
    audioElements.push(audio);
    return audio;
  }
  
  function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
    var index = audioElements.indexOf(audio);
    if (index !== -1) {
      audioElements.splice(index, 1);
    }
  }
  audio1 = createAudio('https://drive.google.com/u/0/uc?id=1RfOA-LF8TUz0d-LbQSWiO-niH8PyOe1Z&export=download');

  function notifyconfirm() {
    alert("finished the queue, click ok to stop the arlet sound");
    stopAudio(audio1);
    stopAudio(audio2);
    clearInterval(repeat);
  }
  
  function checkHeader() {    
    headerElement = document.querySelector('.font-header4');    
    if (headerElement) {
      if (!isPlaying) {
        audio2 = createAudio('https://drive.google.com/u/0/uc?id=1wI1nWz99npKZzkVmp-ZSdH4nS8j_3G7t&export=download');
        isPlaying = true;
        notifyconfirm();
      }
    }
  }
  
  var repeat = setInterval(checkHeader, 10000);
})();
