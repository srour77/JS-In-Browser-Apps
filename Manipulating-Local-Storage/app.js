const keyInput = document.querySelector('.container input:first-of-type')
const valueInput = document.querySelector('.container input:last-of-type')
const controls = document.querySelectorAll('.container .control button:not(.show-items)')
const valuetoggler = document.querySelector('.container a')
const showItemsButton = document.querySelector('.container .control button.show-items')
const allItemsDiv = document.querySelector('.container .result')

controls.forEach(function(item) {
    item.addEventListener('click', fun)
})
valuetoggler.addEventListener('click', toggleValueInput)
showItemsButton.addEventListener('click', showAllItems)

function toggleValueInput(ev) {
    ev.preventDefault()
    if(valueInput.style.display === 'none'){
        return valueInput.style.display = 'block'
    }
    valueInput.style.display = 'none'
}

function fun() {
    const fun = this.dataset.fun
    const key = keyInput.value.trim()
    const value = valueInput.value.trim()
    let res = localStorage[fun](key, value)
    console.log(res);
    if(res === null){
        return allItemsDiv.innerHTML= `invalid key or value`
    }
    allItemsDiv.innerHTML= `item has been ${this.id} successfully <br> key: ${key} <br> value: ${value}`
}

function showAllItems() {
    allItemsDiv.innerHTML= ''
    for(let i =0, len = localStorage.length; i<len; i++){
        const p = document.createElement('p')
        p.textContent = localStorage.key(i)
        allItemsDiv.appendChild(p)
    }
}