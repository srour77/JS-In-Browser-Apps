window.addEventListener('keydown', function(ev){
    let sound= document.querySelector(`audio[data-key="${ev.keyCode}"]`);    
    if(!sound) return null;
    sound.currentTime= 0;
    sound.play();
    let key= document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    key.classList.add('playing');
});

let keys= document.querySelectorAll(`.key`);
keys.forEach(function(key){
    key.addEventListener('transitionend', function(e){
        if(e.propertyName !== 'transform') return;
        key.classList.remove('playing');
    });
});