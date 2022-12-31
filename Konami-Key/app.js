let seq = [];
const pass = '38384040373937399998';
let mainDiv = document.querySelector('.main')
window.addEventListener('keyup', detectKey)

function detectKey(ev) {
    seq.push(String(ev.keyCode));
    let check= seq.slice(-pass.length);
    if (check.join('') == pass) {
        cornify_add();
        console.log('you are legend')
        mainDiv.style.display = 'none'
    }
}
