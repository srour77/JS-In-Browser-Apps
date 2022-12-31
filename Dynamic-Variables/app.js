function handleInputChange(){
    let suffix= this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

let inputs= document.querySelectorAll('.controls input');
inputs.forEach((item) => {
    item.addEventListener('mousechange', handleInputChange);
    item.addEventListener('mouseover', handleInputChange);
});