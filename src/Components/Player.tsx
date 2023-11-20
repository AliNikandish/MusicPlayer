import { FiPause,FiPlay } from 'react-icons/fi'
import { IoMdShuffle } from 'react-icons/io'
import { RxTrackNext, RxTrackPrevious } from 'react-icons/rx'
import { MusicPlayerContext } from '../Context/MusicPlayerContext'
import {MdOutlineShuffleOn,MdRepeatOne,MdRepeat} from 'react-icons/md'
import { useContext } from 'react'
import ProgressBar from './ProgressBar'
import '../Components/Progres.css'



function Player() {
  const{nextSong,prevSong,playOrPause,pause,isShuffleMode,shuffleHandler,repeatOne,repeatHandler}=useContext(MusicPlayerContext)
  return (
    <div className='player  bg-slate-100'>
        
        <ProgressBar/>
        

        <div className='px-20 mt-2  buttons flex justify-evenly text-red-500 text-[26px]'>
          <div className='cursor-pointer' onClick={shuffleHandler}>
            {isShuffleMode ?(<MdOutlineShuffleOn/>) : (<IoMdShuffle/>)}
            
          </div>
          <div className='cursor-pointer' onClick={()=>prevSong()} >
            <RxTrackPrevious/>
          </div>
          <div className='cursor-pointer' onClick={()=>playOrPause()}>
            {pause ? (<FiPause/>):(<FiPlay/>)}
          </div>
          <div className='cursor-pointer' onClick={()=>nextSong()}>
            <RxTrackNext/>
          </div>
          <div className='cursor-pointer' onClick={repeatHandler}>

            {repeatOne ? (<MdRepeatOne/>) : (<MdRepeat/>)}
            
            
          </div>
        </div>
    </div>
  )
}

export default Player