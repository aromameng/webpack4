const image = require('./assets/1.jpg');

let div = document.createElement('div')
div.setAttribute('id','img')
let text = document.createTextNode('click me')
div.appendChild(text)

let img = document.createElement('img')
img.setAttribute('src',image)
div.appendChild(img)

let test = document.createElement('a')
test.setAttribute('href','/#/test')
test.innerHTML = 'Test'
div.appendChild(test)

export default div