import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
	const navigate=useNavigate()
	return (
		<>
			<div className='w-full flex justify-between items-center font-semibold '>
				<div className='flex gap-2 items-center'>
					<img onClick={()=>navigate(-1)} className='w-8 bg-black rounded-2xl cursor-pointer p-2' src={assets.arrow_left} alt="" />
					<img onClick={()=>navigate(1)} className='w-8 bg-black rounded-2xl cursor-pointer p-2' src={assets.arrow_right} alt="" />
				</div>
				<div className='flex items-center gap-4'>
					<p className='bg-white text-black px-4 py-1 rounded-full text-[14px] hidden md:block cursor-pointer'> Explorer Premium </p>
					<p className='bg-black text-white px-4 py-1 rounded-full text-[14px] hidden md:block  cursor-pointer'> Install App </p>
					<p className='bg-purple-700 text-black  w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'> D </p>
				</div>
			</div>
			<div className='flex items-center gap-2 mt-4'>
				<p className='bg-white text-black px-4 py-1 rounded-full cursor-pointer text-[16x] '>All</p>
				<p className='bg-black text-white px-4 py-1 rounded-full cursor-pointer text-[16x] '>Music</p>
				<p className='bg-black text-white px-4 py-1 rounded-full cursor-pointer text-[16x] '>Podcast</p>

			</div>
		</>
	)
}

export default Navbar
