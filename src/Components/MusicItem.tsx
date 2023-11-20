import { useContext } from "react"
import { MusicPlayerContext } from "../Context/MusicPlayerContext"
import { MusicItemProps } from "../Types/MusicPlayerTypes"
import {LuBarChart2} from 'react-icons/lu'
import { durationFormatter } from "../Utils/Helpers"

function MusicItem({name,author,duration,index}:MusicItemProps) {
  const{clickAudio,index:currentIndex}=useContext(MusicPlayerContext)
 
  return (
    <>
    
    {index===currentIndex ? (

      <div className='flex justify-between items-center cursor-pointer shadow-xl border-gray-700 py-4 px-2 rounded-2xl' onClick={()=>clickAudio(index)}>
      <div className='flex gap-x-4'>
        <div className='text-gray-500 text-lg'>{index+1}.</div>
          <div>
              <p className='font-bold text-lg'>{name}</p>
              <p className='text-gray-500 text-xs -mt-1'>{author}</p>
          </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-red-500"><LuBarChart2/></div>
          <div className='text-gray-500'>{`${durationFormatter(duration).min}:${durationFormatter(duration).sec} `}</div>
        </div>
      </div>
      </div>

    ) : (

      <div className='flex justify-between cursor-pointer px-2' onClick={()=>clickAudio(index)}>
      <div className='flex gap-x-4'>
        <div className='text-gray-500 text-lg'>{index+1}.</div>
          <div>
              <p className='font-bold text-lg'>{name}</p>
              <p className='text-gray-500 text-xs -mt-1'>{author}</p>
          </div>
      </div>
        <div className='text-gray-500'>{`${durationFormatter(duration).min}:${durationFormatter(duration).sec} `}</div>
      </div>

    )}
        
    </>
  )
}

export default MusicItem