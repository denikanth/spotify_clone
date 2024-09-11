import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
	const navigate=useNavigate()
	return (
		<div className='w-[25%] h-full p-2 text-white gap-2 flex-col hidden lg:flex ' >
			<div className='bg-[#121212] h[15%]  rounded flex flex-col justify-around'>
				<div onClick={()=>{navigate('/')}} className='flex items-center p-3 gap-4 cursor-pointer '>
					<img className='w-6' src={assets.home_icon} alt="" />
					<p className='font-bold'>Home</p>
				</div>
				<div className='flex items-center p-3 gap-4  cursor-pointer '>
					<img className='w-6' src={assets.search_icon} alt="" />
					<p className='font-bold'>Search</p>
				</div>

			</div>
			<div className='bg-[#121212] rounded h-[85%]'>
				<div className='p-4 flex items-center justify-between '>
					<div className='flex items-center gap-3 '>
						<img className='w-8' src={assets.stack_icon} alt="" />
						<p className='font-semibold'>Your Library</p>
					</div>
					<div className='flex items-center gap-3 '>
						<img className='w-5' src={assets.arrow_icon} alt="" />
						<img className='w-5' src={assets.plus_icon} alt="" />
					</div>
				</div>
				<div className='bg-[#242424] flex flex-col font-semibold rounded m-2 p-4  pl-4  
					items-start justify-start gap-1'>
						<h1>Create your first playlist</h1>
						<p className='font-light '>its easy we will help you</p>
						<button className='text-black text-[15px] bg-white rounded-full px-5 py-2 mt-3'>Create playlist</button>
				</div>
				<div className='bg-[#242424] flex flex-col font-semibold rounded m-2 p-4  pl-4  mt-4
					items-start justify-start gap-1'>
						<h1>lets find some podcast to follow </h1>
						<p className='font-light '>{" we'll keep update on new episodes"}</p>
						<button className='text-black text-[15px] bg-white rounded-full px-5 py-2 mt-3'>Browse podcast</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
