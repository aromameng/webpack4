import Router from './hash.js'
import './assets/index.css'
import home from './home.js'
import test from './test.js'

let app = document.getElementById('app')

Router.route('/',function(){
    app.appendChild(home)
})

Router.route('/test', function() {
    app.innerHTML = test
});