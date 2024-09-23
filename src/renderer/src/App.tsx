import Users from './components/Users'
import Versions from './components/Versions'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h2>Powered by electron-vite and mikro-orm</h2>

      <Users />

      <Versions />

      <button onClick={ipcHandle}>Ping</button>
    </>
  )
}

export default App
