import React, { useContext } from 'react'
import { assets,songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContextProvider'
const Player = () => {
    const {seekBg,seekBar,play,pause,playStatus,track,time,previous,next,seekSong}=useContext(PlayerContext)
    
  return (
    <div className=' h-[10%] bg-black text-white flex justify-between items-center px-4 ' >
        <div className='hidden lg:flex items-center gap-4 '>{/* ---songs photo and name----- */}
            <img className="w-12" src={track.image} alt="" />
            <div >
                <h3 className='font-semibold'>{track.name}</h3>
                <p className='font-light text-[14px]'>{track.desc.slice(0,20)}</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1 m-auto '> {/* ---progress bar and buttons----- */}
            <div className='flex gap-3 '>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img  onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                {
                    playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                    :<img  onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                }
                
                
                <img onClick={next}  className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-3 '>
                <p>{time.currentTime.min}<b className='mx-[2px]'>:</b>{time.currentTime.sec}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[45vw] max-w-[700px] bg-gray-300 rounded-full h-[4px] cursor-pointer'>
                    < hr ref={seekBar} className='bg-blue-700 border-none rounded-full h-full w-0' />
                </div>
                <p>{time.totalTime.min}<b className='mx-[2px]'>:</b>{time.totalTime.sec}</p>

            </div>
        </div> 
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img src={assets.plays_icon} className='w-4' alt="" />
            <img src={assets.mic_icon} className='w-4' alt="" />
            <img src={assets.queue_icon} className='w-4' alt="" />
            <img src={assets.speaker_icon} className='w-4' alt="" />
            <img src={assets.volume_icon} className='w-4' alt="" />
            <div className='w-20 rounded-full bg-slate-50 h-1'></div>
            <img src={assets.mini_player_icon} className='w-4' alt="" />
            <img src={assets.zoom_icon} className='w-4' alt="" />
        </div>
    </div>
  )
}

export default Player
