const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function toggleVideoPlay(){
    if (video.paused) {
        video.play();
    }
    else{video.pause();}
    updateToggleButton();
}

function toggleButtonPlay(ev) {
    toggleVideoPlay();
    updateToggleButton()
}

function updateToggleButton(){
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function handleSkip() {
    let period = Number(this.dataset.skip); 
    video.currentTime += period;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function updateprogress() {
    let percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e) {
    let percentage = (e.offsetX / progress.offsetWidth) * 100;
    video.currentTime = (video.duration * percentage) / 100;
}

video.addEventListener('click', toggleVideoPlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('timeupdate', updateprogress);
video.addEventListener('mouseout', _ => mouseDown = false);

toggle.addEventListener('click', toggleButtonPlay);

skipButtons.forEach(function(item) {
    item.addEventListener('click', handleSkip)
})

ranges.forEach(function(item) {
    item.addEventListener('change', handleRangeUpdate)
})

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', _ => mouseDown = true);
progress.addEventListener('mouseup', _ => mouseDown = false);
progress.addEventListener('mousemove', (e) => {
    if(mouseDown){scrub(e)}
});