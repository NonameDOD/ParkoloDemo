import './App.css'
import Parkolok from './components/Parkolok'
import { ParkoloProvider } from './contexts/ParkoloContext'

function App() {

  return (
    <ParkoloProvider>
      <Parkolok />
    </ParkoloProvider>
  )
}

export default App
