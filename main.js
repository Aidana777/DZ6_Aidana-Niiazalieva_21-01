function rev() {
    let str = document.getElementById('text').value;
    let strrev = '';

    for (let i = str.length - 1; i >= 0; i--) {
        strrev = strrev + str[i]
    }
    document.getElementById('innerText').innerHTML = '' + strrev;
}


const input = document.querySelector('#input')
const addBtn = document.querySelector('#add')
const newList = document.querySelector('#list')

const create = () => {
    var fruits = ['Яблоко', 'Банан'];
fruits.forEach((el)=>{

    const divTag = document.createElement('div')
    const textH3 = document.createElement('h3')
    textH3.innerText = input.value
    divTag.append(textH3)
    newList.append(divTag)
})
}
addBtn.addEventListener('click', create)