import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContextProvider'
const DisplayAlbum = () => {

	const { id } = useParams()
	const albumdata = albumsData[id]
	const {playById}=useContext(PlayerContext)
	return (
		< >
			<Navbar />
			<div className='mt-10 flex flex-col gap-8 text-white md:flex-row md:items-end '>
				<img className='w-[180px] rounded' src={albumdata.image} alt="" />
				<div className='flex flex-col gap-3  ' >
					<p className='font-bold ' >Playlist</p>
					<p className=' font-bold  text-5xl'>{albumdata.name}</p>
					<p>your weekly update of the most played tracks</p>
					<div className='flex gap-2  items-center'>
						<img className='w-4 h-4 ' src={assets.spotify_logo} alt="" />
						<p className='font-bold '>Spotify .</p>
						<p className='text-slate-300 text-[14px]'>1,33,66,8 likes</p>
						<p className='font-semibold text-[14px]'>.50 Songs,</p>
						<p className='text-slate-300 text-[14px]'>about 2hr 30min</p>

					</div>
				</div>
			</div>

			{/* <div className='mt-6 text-[#a7a7a7] text-[16px] font-semibold'>
				<div className='flex w-full pl-2  '>
					<p className='mr-4'>#</p>
					<div className='flex justify-between pr-[100px] w-full'>
						<p >Title</p>
						<p>Album</p>
						<p>Date Added</p>
						<img className="w-4 h-4" src={assets.clock_icon} alt="" />
					</div>
				</div>
			</div>
			<hr className='mt-3 ' /> */}{/* it is another way to do the above design */}

			<div className='grid grid-cols-3 text-[#a7a7a7] mt-6 pl-2 sm:grid-cols-4  mb-3'>
				<p><b className='mr-4'>#</b><b>Title</b></p>
				<p>Albums</p>
				<p className='hidden sm:block'>Date Added</p>
				<img className="w-4 h-4" src={assets.clock_icon} alt="" />
			</div>
			<hr className='mb-1' />

			{
				songsData.map((item, index) => (
					<div key={index} onClick={()=>playById(item.id)}  className=' grid grid-cols-3 sm:grid-cols-4 hover:bg-[#ffffff26] pl-2 py-2 rounded text-[#a7a7a7] cursor-pointer'>
						<div className='flex gap-4 items-center'>
							<p className='text-white'>{item.id + 1}</p>
							<img className='w-10  hidden sm:block  ' src={item.image} alt="" />
							<p className='font-[500] text-white text-[14px]'>{item.name}</p>
						</div>
						<div className='flex items-center'>
							<p className='text-[14px]'>{albumdata.name}</p>
						</div>
						<div className='items-center hidden sm:flex'>
							<p className='text-[14px]  '>5 days ago</p>
						</div>
						<div className='flex items-center '>
							<p className='text-[14px]'>{item.duration}</p>
						</div>


					</div>
				))
			}

		</>
	)
}

export default DisplayAlbum
