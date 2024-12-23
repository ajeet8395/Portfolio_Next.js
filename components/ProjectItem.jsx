import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, projectCode }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5c598a] to-[#516da9]'>
      {/* <Image className='rounded-xl group-hover:opacity-10 h-full object-cover' src={backgroundImg} alt='/' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <div className='grid grid-cols-2 gap-3'>
          <Link href={projectCode} target='_blank' rel='noreferrer'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Code</p>
          </Link>
          <Link href={projectUrl} target='_blank' rel='noreferrer'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default ProjectItem