const input = document.getElementById('username')
const submit = document.getElementById('submit')
const allDataDiv = document.querySelector('.container div:last-of-type')
submit.addEventListener('click', getRepos)

async function getRepos() {
    let inputText = input.value.trim();
    try {
        let res = await fetch(`https://api.github.com/users/${inputText}/repos`)
        let data = await res.json()
        appendData(data)
    } catch{
        allDataDiv.innerHTML = 'This user name may be incorrect';
    }
}

function appendData(data){
    allDataDiv.innerHTML = ''
    data.forEach(item => {
        const repoDiv = createRepoDiv(item.name, item.html_url)
        allDataDiv.appendChild(repoDiv)
    });
}

function createRepoDiv(name, url){
    const div = document.createElement('div')
    
    const p = document.createElement('p')
    p.innerText = name

    const link = document.createElement('a')
    link.innerText = 'visit'
    link.href = url
    link.target = '_blank'

    div.appendChild(p)
    div.appendChild(link)
    return div
}