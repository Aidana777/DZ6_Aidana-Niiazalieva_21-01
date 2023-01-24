const text = document.getElementById('text')
const reverse = document.querySelector('.reverse')

text.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        let arr = []
        const rev = text.value.split('').reverse().join('')
        arr.push(rev)
        arr.forEach((item) => {
            const div = document.createElement('div')
            const button = document.createElement('button')
            button.setAttribute('class', 'btn')
            button.innerHTML = 'delete'

            button.onclick = () => {
                div.remove()
            }
            div.innerHTML = item
            div.append(button)
            reverse.append(div)
            text.value = ""


        })

    }

})

