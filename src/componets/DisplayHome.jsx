import React from 'react'
import Navbar from './Navbar'
import { albumsData,songsData } from '../assets/assets'
import AlbumsData from './AlbumsData'
import SongsData from './SongsData'
const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col gap-2  '>{/* this is for album data */}
        <h1 className='font-bold text-white text-[20px] mt-4 '>Featured charts</h1>
        <div className='flex overflow-auto pl-2 '>
          {albumsData.map((item,index)=>(<AlbumsData key={index} id={item.id} name={item.name} image={item.image} desc={item.desc}/>))}
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-2  '>{/* this is for song data */}
        <h1 className='font-bold text-white text-[20px] mt-4 '>Today bigest hits</h1>
        <div className='flex overflow-auto pl-2  '>
          {songsData.map((item)=>(<SongsData key={item.id} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-2  '>{/* this is for song data */}
        <h1 className='font-bold text-white text-[20px] mt-4 '>Tamil melodie hits</h1>
        <div className='flex overflow-auto pl-2  '>
          {songsData.map((item)=>(<SongsData key={item.id} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
        </div>
      </div>

    </>
  )
}

export default DisplayHome
