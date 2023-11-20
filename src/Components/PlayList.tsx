import { useContext } from "react"
import MusicItem from "./MusicItem"
import { MusicPlayerContext } from "../Context/MusicPlayerContext"
import { musicListType } from "../Types/MusicPlayerTypes"

function PlayList() {
  const{musicList}=useContext(MusicPlayerContext)
  return (
    <div className='playlist pl-5 pr-12 flex flex-col gap-y-5 overflow-y-scroll h-56'>

      {musicList.map((music:musicListType,index=0)=>{
        return <MusicItem {...music} key={index} index={index}/>
      })}
      
    </div>
  )
}

export default PlayList