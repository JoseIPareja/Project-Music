function playMusic(e) {
    const audio = document.querySelector("audio[class='${e.code}']");
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector("div[class='key ${e.code}']");
}

window.addEventListener('keydown', playMusic);
