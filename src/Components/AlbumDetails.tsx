import { useContext } from "react"
import { MusicPlayerContext } from "../Context/MusicPlayerContext"
import { musicDetails } from "../MusicDatas"
import { tottalMinute } from "../Utils/Helpers"
function AlbumDetails() {
  const {musicList}=useContext(MusicPlayerContext)


  return (
    <div className='album-details px-12 py-2'>
      <p className='font-bold text-2xl '>{musicDetails.albumName}</p>
      <p className='font-medium'>{musicDetails.albumArtist}</p>
      <div className='flex gap-x-2 text-gray-500 text-xs -mt-2'>
        <span className='flex items-center'>{musicDetails.albumDate}</span>
        <div className='flex gap-x-1 items-center'><span className='text-2xl'>·</span>{musicList.length} song</div>
        <div className='flex gap-x-1 items-center'><span className='text-2xl'>·</span>{tottalMinute(musicList)} min</div>
        </div>
    </div>
  )
}

export default AlbumDetails