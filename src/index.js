const image = require('./assets/1.jpg');
// import './assets/index.scss'
import './assets/index.css'

let app = document.getElementById('app')

let div = document.createElement('div')
div.setAttribute('id','img')
let text = document.createTextNode('click me')
div.appendChild(text)

document.body.appendChild(div);
let img = document.createElement('img')
img.setAttribute('src',image)
div.appendChild(img)