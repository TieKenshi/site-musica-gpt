document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("play-pause");
    const volumeInput = document.getElementById("volume");

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = "Pause";
        } else {
            audio.pause();
            playPauseButton.textContent = "Play";
        }
    });

    volumeInput.addEventListener("input", function () {
        audio.volume = volumeInput.value;
    });
});
