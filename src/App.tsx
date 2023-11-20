import './App.css'
import MusicPlayer from './Components/MusicPlayer'
import { MusicPlayerContextProvider } from './Context/MusicPlayerContext'

function App() {
  return (
    <>
    <MusicPlayerContextProvider>
      <div className="container mx-auto flex justify-center">
       <MusicPlayer/>
      </div>
    </MusicPlayerContextProvider>
      
    </>
  )
}

export default App
