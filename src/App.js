import { version, Component } from 'inferno'
import { Quiz } from './Quiz'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          WOWNAIL
        </header>
        <p>
          <Quiz />
        </p>
      </div>
    )
  }
}

export default App
