javascript:(function() {
  console.log("running");
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
  audio1 = createAudio('https://github.com/truong0235/random-stuff/raw/main/audio-file/mp3-now.com%20-%2060%20seconds%20of%20silence_64kbps.mp3');

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
        audio2 = createAudio('https://github.com/truong0235/random-stuff/raw/main/audio-file/pickupCoin.wav');
        isPlaying = true;
        setTimeout(notifyconfirm, 15000);
      }
    }
  }
  
  var repeat = setInterval(checkHeader, 10000);
})();