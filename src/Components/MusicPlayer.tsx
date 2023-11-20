import ImageSection from './ImageSection'
import AlbumDetails from './AlbumDetails'
import PlayList from './PlayList'
import Player from './Player'

function MusicPlayer() {

  return (
    <div className='mt-5 w-[450px] h-[700px] bg-slate-50 rounded-lg m-2 overflow-hidden'>
        <ImageSection/>
        <AlbumDetails/>
        <PlayList/>
        <Player/>
    </div>
  )
}

export default MusicPlayer