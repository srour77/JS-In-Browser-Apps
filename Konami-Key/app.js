let seq = [];
const pass = '38384040373937399998';
console.log(pass.length)
let mainDiv = document.querySelector('.main')

function detectKey(ev) {
    seq.push(String(ev.keyCode));
    let check= seq.slice(-pass.length);
    if (check.join('') == pass) {
        cornify_add();
        console.log('you are legend')
        mainDiv.style.display = 'none'
    }
}

window.addEventListener('keyup', detectKey)