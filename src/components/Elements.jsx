import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'


export const Elements = () => {
  return (
    <div className='flex flex-col gap-24 container'>
        <div className='md:flex items-center'>
            <img src={img1} className='mx-auto w-[370px] h-[370px]' alt='img' />
            <div className='flex flex-col justify-between'>
                <h1 className='font-bold dark:text-white md:text-left text-center text-2xl text-[#171717]'>Explore topics</h1>
                <p className='max-w-[400px] mx-auto text-[#737373] dark:text-[#A3A3A3] py-2'>
                    Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.
                </p>
            </div>
        </div>
        <div className='md:flex items-center '>
            <img src={img2} className='mx-auto w-[370px] h-[370px]' alt='img' />
            <div className='flex flex-col justify-between'>
                <h1 className='font-bold dark:text-white md:text-left text-center text-2xl text-[#171717]'>Meet new Friends</h1>
                <p className='max-w-[400px] mx-auto text-[#737373] dark:text-[#A3A3A3] py-2'>
                
                    Connect with our expansive network, match with like-minded peers, and learn code together
                </p>
            </div>
        </div>
        <div className='md:flex items-center '>
            <img src={img3} className='mx-auto w-[370px] h-[370px]' alt='img' />
            <div className='flex flex-col justify-between'>
                <h1 className='font-bold dark:text-white md:text-left text-center text-2xl text-[#171717]'>Find</h1>
                <p className='max-w-[400px] mx-auto text-[#737373] dark:text-[#A3A3A3] py-2'>
                    Connect with people around the world in a huge community with million of students
                </p>
            </div>
        </div>
    </div>
  )
}
