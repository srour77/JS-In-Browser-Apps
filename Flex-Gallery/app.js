function openToggle(){
    this.classList.toggle('open');
}

function openActiveToggle(ev){
    if(ev.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

let panels = document.querySelectorAll('.panel');
panels.forEach(item => {
    item.addEventListener('click', openToggle);
    item.addEventListener('transitionend', openActiveToggle);
});