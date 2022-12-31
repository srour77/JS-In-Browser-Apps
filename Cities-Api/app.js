const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let arr= [];

fetch(endpoint)
.then((res) => res.json())
.then((data) => arr.push(...data))

function findMatches(wordToMatch, arr) {
    return arr.filter(item => {
        const regex = new RegExp(wordToMatch, 'gi');
        return item.city.match(regex) || item.state.match(regex)
    });
}

function handleChange(){
    let matches= findMatches(this.value, arr);
    let html = matches.map(function(item){
    return `
        <li>
            <span class="name">${item.city}, ${item.state}</span>
            <span class="population">${item.population}</span>
        </li>`;
    }).join('');
    suggestion.innerHTML= html;
}

let input= document.querySelector('.search');
let suggestion= document.querySelector('.suggestions');
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);