import reactLogo from '../assets/react.svg'
import remeshLogo from '../assets/remesh.jpeg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from '../features/counter'
import { RemeshRoot } from 'remesh-react'
import { store } from './store'

function App() {

  return <RemeshRoot store={store}>
      <div>
        <a href="https://vitejs.dev" target="noreferer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="noreferer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/remesh-js/remesh" target="noreferer">
          <img src={remeshLogo} className="logo remesh" alt="Remesh logo" />
        </a>
      </div>
      <h1>Vite + React + Remesh</h1>
      <div className="card">
        <Counter/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </RemeshRoot>
}

export default App
