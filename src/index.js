import { render } from 'inferno'
import 'babel-polyfill'
import { App } from './App'
import './index.css'

render(<App />, document.getElementById('app'))
