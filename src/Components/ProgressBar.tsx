import { useContext } from "react"
import { MusicPlayerContext } from "../Context/MusicPlayerContext"
import '../Components/Progres.css'
const ProgressBar = () => {
    const{playheadRef,hoverPlayheadRef,playerRef,currentSong,timelineRef}=useContext(MusicPlayerContext)
  return (
    <div className="current-song py-5">
            <audio ref={playerRef}>
              <source src={ currentSong.audio } type="audio/ogg"/>
                Your browser does not support the audio element.
            </audio>
          
            <div ref={timelineRef } id="timeline">
              
              <div ref={playheadRef } id="playhead" className="absolute">
              <div className="circle absolute w-3 h-3 bg-red-500 rounded-full top-[-5px] right-0"></div>
              </div>
              <div ref={hoverPlayheadRef } className="hover-playhead" data-content="0:00"></div>
            </div>
      </div>
  )
}

export default ProgressBar