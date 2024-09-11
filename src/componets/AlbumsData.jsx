import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AllbumsData = ({image,desc,name,id}) => {
  const navigate=useNavigate()
 
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[150px]  p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]  '>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1 text-white text-[14px]'>{name}</p>
      <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default AllbumsData
