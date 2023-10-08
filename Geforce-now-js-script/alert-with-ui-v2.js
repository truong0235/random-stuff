(function() {
   var isPlaying = false
   var headerElement;
   var audio1 = new Audio('https://truong0235.github.io/random-stuff/audio-file/mp3-now.com%20-%2060%20seconds%20of%20silence_64kbps.mp3'),
      loopAudio1 = true,
      audio2 = new Audio('https://truong0235.github.io/random-stuff/audio-file/pickupCoin.wav'),
      loopAudio2 = true;

   function repeat(audioSource, loop) {
      audioSource.addEventListener('ended', function() {
         if (loop)
            audioSource.play();
      })
   }

   function alertAndStop() {
      alert("queue finished, press ok to turn off alert sound.");
      loopAudio1 = loopAudio2 = false;
      audio1.stop();
      audio2.stop();
      clearInterval(mainLoop);
   }

   function elementCheck() {
      headerElement = document.querySelector('.font-header4');
      if (headerElement)
         if (!isPlaying) {
            repeat(audio2, loopAudio2);
            setTimeout(arletAndStop, 15000);
            isPlaying = true;
         }
   }

   function main() {
      repeat(audio1, loopAudio1);
      elementCheck();
   }

   var mainLoop = setInterval(main, 10000);

})();
