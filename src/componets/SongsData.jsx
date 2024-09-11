import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContextProvider'


const SongsData = ({image,desc,name,id,}) => {
  const {playById}=useContext(PlayerContext)
  
  return (
    <div onClick={()=>playById(id)} className='min-w-[150px]  p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] '>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1 text-white '>{name}</p>
      <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongsData
