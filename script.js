function playAudio(url) {
    new Audio(url).play();


}


function playDrum(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (audio === null) {
        return;
    }

    key.classList.add('playing')

    audio.currentTime = 0;
    audio.play();

    key.addEventListener('transitionend', () => {
        key.classList.remove("playing");
    });




}
document.addEventListener('keydown', playDrum);


