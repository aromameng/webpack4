import moment from 'moment'
import './assets/test.scss'

const html = `<div>
    <p>test</p>
    <p>${moment().format('YYYY-MM-DD')}</p>
    <a href="/">返回首页</a>
</div>`

export default html

