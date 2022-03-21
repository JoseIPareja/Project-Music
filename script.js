function playMusic(e) {
    const audio = document.querySelector(`audio[class="${e.code}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`div[class="key ${e.code}"]`);
    key.classList.add(`${e.code}playing`);
}

window.addEventListener('keydown', playMusic);

function removeEffect(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove(`KeyMplaying`);
    this.classList.remove(`KeyUplaying`);
    this.classList.remove(`KeySplaying`);
    this.classList.remove(`KeyIplaying`);
    this.classList.remove(`KeyCplaying`);
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeEffect));