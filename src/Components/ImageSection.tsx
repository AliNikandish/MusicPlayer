import { useContext } from 'react'
import { BsPause, BsPlay } from 'react-icons/bs'
import { MusicPlayerContext } from '../Context/MusicPlayerContext'

function ImageSection() {

  const{currentSong,playOrPause,pause}=useContext(MusicPlayerContext)
  return (
    <div className="imagesection relative">
      <img className=' w-full h-72 rounded-md rounded-br-none rounded-bl-[60px]' src={currentSong.img} alt="" />
      <div className='playbutton bg-red-500 w-20 h-20 rounded-full absolute right-8 -bottom-10 flex justify-center items-center cursor-pointer'>
        <div className='text-white text-3xl'onClick={()=>playOrPause()}>
        {pause ? (<BsPause/>):(<BsPlay/>)}
        </div>
      </div>
    </div>
  )
}

export default ImageSection